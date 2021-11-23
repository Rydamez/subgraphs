import { Context } from '@enzymefinance/subgraph-cli';
import { default as v4 } from '../../../deployments/matic/v4.json';
import { Variables } from '../subgraph.config';

export const matic: Context<Variables> = {
  name: 'enzymefinance/enzyme-core-matic',
  network: 'matic',
  variables: {
    block: 21708066,
    dispatcherAddress: '0x402A81aD2972a017B4564453E69afaE2b006A7E2',
    wethTokenAddress: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    chainlinkAggregatorAddresses: {
      audUsd: '0x062Df9C4efd2030e243ffCc398b652e8b8F95C6f',
      btcEth: '0x19b0F0833C78c0848109E3842D34d2fDF2cA69BA',
      btcusd: '0xc907E116054Ad103354f2D350FD2514433D57F6f',
      chfusd: '0xc76f762CedF0F78a439727861628E0fdfE1e70c2',
      ethUsd: '0xF9680D99D6C9589e2a93a78A04A279e509205945',
      eurUsd: '0x73366Fe0AA0Ded304479862808e02506FE556a98',
      gbpUsd: '0x099a2540848573e94fb1Ca0Fa420b00acbBc845a',
      jpyUsd: '0xD647a6fC9BC6402301583C91decC5989d8Bc382D',
    },
    releases: {
      v2: {
        adapterBlacklistAddress: '0x0000000000000000000000000000000000000000',
        adapterWhitelistAddress: '0x0000000000000000000000000000000000000000',
        aggregatedDerivativePriceFeedAddress: '0x0000000000000000000000000000000000000000',
        assetBlacklistAddress: '0x0000000000000000000000000000000000000000',
        assetWhitelistAddress: '0x0000000000000000000000000000000000000000',
        buySharesCallerWhitelistAddress: '0x0000000000000000000000000000000000000000',
        chainlinkPriceFeedAddress: '0x0000000000000000000000000000000000000000',
        comptrollerLibAddress: '0x0000000000000000000000000000000000000000',
        entranceRateBurnFeeAddress: '0x0000000000000000000000000000000000000000',
        entranceRateDirectFeeAddress: '0x0000000000000000000000000000000000000000',
        feeManagerAddress: '0x0000000000000000000000000000000000000000',
        fundActionsWrapperAddress: '0x0000000000000000000000000000000000000000',
        fundDeployerAddress: '0x0000000000000000000000000000000000000000',
        guaranteedRedemptionAddress: '0x0000000000000000000000000000000000000000',
        integrationManagerAddress: '0x0000000000000000000000000000000000000000',
        investorWhitelistAddress: '0x0000000000000000000000000000000000000000',
        managementFeeAddress: '0x0000000000000000000000000000000000000000',
        maxConcentrationAddress: '0x0000000000000000000000000000000000000000',
        minMaxInvestmentAddress: '0x0000000000000000000000000000000000000000',
        performanceFeeAddress: '0x0000000000000000000000000000000000000000',
        policyManagerAddress: '0x0000000000000000000000000000000000000000',
        valueInterpreterAddress: '0x0000000000000000000000000000000000000000',
        vaultLibAddress: '0x0000000000000000000000000000000000000000',
      },
      v3: {
        adapterBlacklistAddress: '0x0000000000000000000000000000000000000000',
        adapterWhitelistAddress: '0x0000000000000000000000000000000000000000',
        aggregatedDerivativePriceFeedAddress: '0x0000000000000000000000000000000000000000',
        assetBlacklistAddress: '0x0000000000000000000000000000000000000000',
        assetWhitelistAddress: '0x0000000000000000000000000000000000000000',
        buySharesCallerWhitelistAddress: '0x0000000000000000000000000000000000000000',
        chainlinkPriceFeedAddress: '0x0000000000000000000000000000000000000000',
        comptrollerLibAddress: '0x0000000000000000000000000000000000000000',
        entranceRateBurnFeeAddress: '0x0000000000000000000000000000000000000000',
        entranceRateDirectFeeAddress: '0x0000000000000000000000000000000000000000',
        feeManagerAddress: '0x0000000000000000000000000000000000000000',
        fundActionsWrapperAddress: '0x0000000000000000000000000000000000000000',
        fundDeployerAddress: '0x0000000000000000000000000000000000000000',
        guaranteedRedemptionAddress: '0x0000000000000000000000000000000000000000',
        integrationManagerAddress: '0x0000000000000000000000000000000000000000',
        investorWhitelistAddress: '0x0000000000000000000000000000000000000000',
        managementFeeAddress: '0x0000000000000000000000000000000000000000',
        maxConcentrationAddress: '0x0000000000000000000000000000000000000000',
        minMaxInvestmentAddress: '0x0000000000000000000000000000000000000000',
        performanceFeeAddress: '0x0000000000000000000000000000000000000000',
        policyManagerAddress: '0x0000000000000000000000000000000000000000',
        valueInterpreterAddress: '0x0000000000000000000000000000000000000000',
        vaultLibAddress: '0x0000000000000000000000000000000000000000',
      },
      v4: {
        addressListRegistryAddress: v4.contracts.AddressListRegistry.address,
        allowedAdapterIncomingAssetsPolicyAddress: v4.contracts.AllowedAdapterIncomingAssetsPolicy.address,
        allowedAdaptersPolicyAddress: v4.contracts.AllowedAdaptersPolicy.address,
        allowedAssetsForRedemptionPolicyAddress: v4.contracts.AllowedAssetsForRedemptionPolicy.address,
        allowedDepositRecipientsPolicyAddress: v4.contracts.AllowedDepositRecipientsPolicy.address,
        allowedExternalPositionTypesPolicyAddress: v4.contracts.AllowedExternalPositionTypesPolicy.address,
        allowedSharesTransferRecipientsPolicyAddress: v4.contracts.AllowedSharesTransferRecipientsPolicy.address,
        comptrollerLibAddress: v4.contracts.ComptrollerLib.address,
        cumulativeSlippageTolerancePolicyAddress: v4.contracts.CumulativeSlippageTolerancePolicy.address,
        entranceRateBurnFeeAddress: v4.contracts.EntranceRateBurnFee.address,
        entranceRateDirectFeeAddress: v4.contracts.EntranceRateDirectFee.address,
        exitRateBurnFeeAddress: v4.contracts.ExitRateBurnFee.address,
        exitRateDirectFeeAddress: v4.contracts.ExitRateDirectFee.address,
        externalPositionFactoryAddress: v4.contracts.ExternalPositionFactory.address,
        externalPositionManagerAddress: v4.contracts.ExternalPositionManager.address,
        feeManagerAddress: v4.contracts.FeeManager.address,
        fundDeployerAddress: v4.contracts.FundDeployer.address,
        gasRelayPaymasterFactoryAddress: v4.contracts.GasRelayPaymasterFactory.address,
        guaranteedRedemptionPolicyAddress: '0x0000000000000000000000000000000000000000',
        integrationManagerAddress: v4.contracts.IntegrationManager.address,
        managementFeeAddress: v4.contracts.ManagementFee.address,
        minAssetBalancesPostRedemptionPolicyAddress: v4.contracts.MinAssetBalancesPostRedemptionPolicy.address,
        minMaxInvestmentPolicyAddress: v4.contracts.MinMaxInvestmentPolicy.address,
        onlyRemoveDustExternalPositionPolicyAddress: v4.contracts.OnlyRemoveDustExternalPositionPolicy.address,
        onlyUntrackDustOrPricelessAssetsPolicyAddress: v4.contracts.OnlyUntrackDustOrPricelessAssetsPolicy.address,
        performanceFeeAddress: v4.contracts.PerformanceFee.address,
        policyManagerAddress: v4.contracts.PolicyManager.address,
        protocolFeeReserveLibAddress: v4.contracts.ProtocolFeeReserveLib.address,
        protocolFeeTrackerAddress: v4.contracts.ProtocolFeeTracker.address,
        unpermissionedActionsWrapperAddress: v4.contracts.UnpermissionedActionsWrapper.address,
        valueInterpreterAddress: v4.contracts.ValueInterpreter.address,
        vaultLibAddress: v4.contracts.VaultLib.address,
      },
    },
  },
};
