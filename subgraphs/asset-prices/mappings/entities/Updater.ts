import { ZERO_BI } from '@enzymefinance/subgraph-utils';
import { Address, ethereum } from '@graphprotocol/graph-ts';
import { DerivativeRegistration, DerivativeUpdater } from '../../generated/schema';
import { getOrCreateAsset } from './Asset';
import { updateAssetPriceWithValueInterpreter } from './AssetPrice';
import { getOrCreateDerivativeRegistry } from './DerivativeRegistry';
import { getActiveRegistration } from './Registration';

export function getOrCreateDerivativeUpdater(): DerivativeUpdater {
  let updater = DerivativeUpdater.load('UPDATER') as DerivativeUpdater;
  if (updater == null) {
    updater = new DerivativeUpdater('UPDATER');
    updater.block = ZERO_BI;
    updater.progress = 0;
    updater.save();
  }

  return updater;
}

// We assume that the number of assets exceeds the number of primitives by a factor of ~2.
// Hence, for every primitive update, we also update 2 assets. If this proportion changes
// significantly in the future, this number could be adjusted.
const DERIVATIVE_UPDATE_BATCH_SIZE = 2;

export function updateDerivativePrices(event: ethereum.Event): void {
  let updater = getOrCreateDerivativeUpdater();
  // Only run the derivative update once per block.
  if (updater.block.equals(event.block.number)) {
    return;
  }

  let registry = getOrCreateDerivativeRegistry();
  let assets = registry.assets;
  // Exit early if there are no derivatives.
  if (!assets.length) {
    return;
  }

  // Update the next batch of derivatives.
  for (let i: i32 = 0; i < DERIVATIVE_UPDATE_BATCH_SIZE; i++) {
    updater.progress = updater.progress + 1 >= assets.length ? 0 : updater.progress + 1;
    let asset = getOrCreateAsset(Address.fromString(assets[updater.progress]));
    let registration = getActiveRegistration(asset) as DerivativeRegistration;
    updateAssetPriceWithValueInterpreter(asset, Address.fromString(registration.interpreter), event);
  }

  updater.block = event.block.number;
  updater.save();
}
