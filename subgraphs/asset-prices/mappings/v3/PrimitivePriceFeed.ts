import { Address } from '@graphprotocol/graph-ts';
import {
  PrimitiveAdded,
  PrimitiveUpdated,
  PrimitiveRemoved,
  StalePrimitiveRemoved,
} from '../../generated/PrimitivePriceFeedContract';
import { createOrUpdatePrimitiveRegistration, removePrimitiveRegistration } from '../../entities/Registration';
import { initializeCurrencies } from '../../utils/initializeCurrencies';
import { updateForPrimitiveRegistration } from '../../utils/updateForRegistration';

let registrationPriority = 2;

export function handlePrimitiveAdded(event: PrimitiveAdded): void {
  initializeCurrencies(event);

  let valueInterpreter = Address.fromString('{{valueInterpreter}}');
  let quoteCurrency = event.params.rateAsset == 0 ? 'ETH' : 'USD';
  let registration = createOrUpdatePrimitiveRegistration(
    event.params.primitive,
    event.address,
    event.params.aggregator,
    valueInterpreter,
    registrationPriority,
    quoteCurrency,
  );

  updateForPrimitiveRegistration(registration, event);
}

export function handlePrimitiveUpdated(event: PrimitiveUpdated): void {
  initializeCurrencies(event);

  let valueInterpreter = Address.fromString('{{valueInterpreter}}');
  let registration = createOrUpdatePrimitiveRegistration(
    event.params.primitive,
    event.address,
    event.params.nextAggregator,
    valueInterpreter,
    registrationPriority,
  );

  updateForPrimitiveRegistration(registration, event);
}

export function handlePrimitiveRemoved(event: PrimitiveRemoved): void {
  initializeCurrencies(event);
  removePrimitiveRegistration(event.params.primitive, event.address);
}

export function handleStalePrimitiveRemoved(event: StalePrimitiveRemoved): void {
  initializeCurrencies(event);
  removePrimitiveRegistration(event.params.primitive, event.address);
}
