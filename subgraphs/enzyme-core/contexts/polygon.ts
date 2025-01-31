import { Context } from '@enzymefinance/subgraph-cli';
import { Variables } from '../subgraph.config';
import { getEnvironment } from '@enzymefinance/environment/all';
import { Deployment, Version } from '@enzymefinance/environment';

const polygonV4Deployment = getEnvironment(Deployment.POLYGON, Version.SULU);

export const polygon: Context<Variables> = {
  name: 'enzymefinance/enzyme-core-polygon',
  network: 'matic',
  variables: {
    block: 25825424,
    wethTokenAddress: polygonV4Deployment.namedTokens.weth.id,
    wrappedNativeTokenAddress: polygonV4Deployment.namedTokens.nativeTokenWrapper.id,
    chainlinkAggregatorAddresses: {
      audUsd: '0x062df9c4efd2030e243ffcc398b652e8b8f95c6f',
      btcEth: '0x19b0f0833c78c0848109e3842d34d2fdf2ca69ba',
      btcusd: '0xc907e116054ad103354f2d350fd2514433d57f6f',
      chfusd: '0xc76f762cedf0f78a439727861628e0fdfe1e70c2',
      ethUsd: '0xf9680d99d6c9589e2a93a78a04a279e509205945',
      eurUsd: '0x73366fe0aa0ded304479862808e02506fe556a98',
      gbpUsd: '0x099a2540848573e94fb1ca0fa420b00acbbc845a',
      jpyUsd: '0xd647a6fc9bc6402301583c91decc5989d8bc382d',
    },
    external: {
      balancerMinterAddress: '0x0000000000000000000000000000000000000000',
      curveMinterAddress: polygonV4Deployment.externalContracts.curveMinter,
      cvxLockerV2Address: polygonV4Deployment.externalContracts.voteLockedConvexToken,
      cvxAddress: polygonV4Deployment.namedTokens.cvx.id,
      mplAddress: '0x0000000000000000000000000000000000000000',
      grtAddress: polygonV4Deployment.namedTokens.grt.id,
      theGraphStakingProxyAddress: polygonV4Deployment.externalContracts.theGraphStakingProxy,
      lusdAddress: '0x0000000000000000000000000000000000000000',
      compAddress: '0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c',
    },
    persistent: {
      addressListRegistryAddress: polygonV4Deployment.contracts.AddressListRegistry,
      dispatcherAddress: polygonV4Deployment.contracts.Dispatcher,
      externalPositionFactoryAddress: polygonV4Deployment.contracts.ExternalPositionFactory,
      gatedRedemptionQueueSharesWrapperFactory: '0x7a68d541af898c14fbd5ecbda3b402b18d8c17d4',
      protocolFeeReserveLibAddress: polygonV4Deployment.contracts.ProtocolFeeReserveLib,
      sharesSplitterFactoryAddress: polygonV4Deployment.contracts.SharesSplitterFactory,
      uintListRegistryAddress: polygonV4Deployment.contracts.UintListRegistry,
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
        allowedAdapterIncomingAssetsPolicyAddress: polygonV4Deployment.contracts.AllowedAdapterIncomingAssetsPolicy,
        allowedAdaptersPerManagerPolicyAddress: polygonV4Deployment.contracts.AllowedAdaptersPerManagerPolicy,
        allowedAdaptersPolicyAddress: polygonV4Deployment.contracts.AllowedAdaptersPolicy,
        allowedAssetsForRedemptionPolicyAddress: polygonV4Deployment.contracts.AllowedAssetsForRedemptionPolicy,
        allowedDepositRecipientsPolicyAddress: polygonV4Deployment.contracts.AllowedDepositRecipientsPolicy,
        allowedExternalPositionTypesPerManagerPolicyAddress:
          polygonV4Deployment.contracts.AllowedExternalPositionTypesPerManagerPolicy,
        allowedExternalPositionTypesPolicyAddress: polygonV4Deployment.contracts.AllowedExternalPositionTypesPolicy,
        allowedSharesTransferRecipientsPolicyAddress:
          polygonV4Deployment.contracts.AllowedSharesTransferRecipientsPolicy,
        arbitraryLoanFixedInterestModuleAddress: polygonV4Deployment.contracts.ArbitraryLoanFixedInterestModule,
        arbitraryLoanTotalNominalDeltaOracleModuleAddress:
          polygonV4Deployment.contracts.ArbitraryLoanTotalNominalDeltaOracleModule,
        auraBalancerV2LpStakingAdapterAddress: '0x0000000000000000000000000000000000000000',
        balancerV2LiquidityAdapterAddress: '0xaa7f7b3daaabdeaf828f4c489379160b034d125b',
        compoundV3AdapterAddress: '0x360eb57d32bf3a95e9fb0aad2a4629ceca3ef7ac',
        comptrollerLibAddress: polygonV4Deployment.contracts.ComptrollerLib,
        convexCurveLpStakingAdapterAddress: polygonV4Deployment.contracts.ConvexCurveLpStakingAdapter,
        convexCurveLpStakingWrapperFactoryAddress: polygonV4Deployment.contracts.ConvexCurveLpStakingWrapperFactory,
        cumulativeSlippageTolerancePolicyAddress: polygonV4Deployment.contracts.CumulativeSlippageTolerancePolicy,
        curveLiquidityAdapterAddress: polygonV4Deployment.contracts.CurveLiquidityAdapter,
        entranceRateBurnFeeAddress: polygonV4Deployment.contracts.EntranceRateBurnFee,
        entranceRateDirectFeeAddress: polygonV4Deployment.contracts.EntranceRateDirectFee,
        exitRateBurnFeeAddress: polygonV4Deployment.contracts.ExitRateBurnFee,
        exitRateDirectFeeAddress: polygonV4Deployment.contracts.ExitRateDirectFee,
        externalPositionManagerAddress: polygonV4Deployment.contracts.ExternalPositionManager,
        feeManagerAddress: polygonV4Deployment.contracts.FeeManager,
        fundDeployerAddress: polygonV4Deployment.contracts.FundDeployer,
        gasRelayPaymasterFactoryAddress: polygonV4Deployment.contracts.GasRelayPaymasterFactory,
        integrationManagerAddress: polygonV4Deployment.contracts.IntegrationManager,
        managementFeeAddress: polygonV4Deployment.contracts.ManagementFee,
        minAssetBalancesPostRedemptionPolicyAddress: polygonV4Deployment.contracts.MinAssetBalancesPostRedemptionPolicy,
        minMaxInvestmentPolicyAddress: polygonV4Deployment.contracts.MinMaxInvestmentPolicy,
        minSharesSupplyFeeAddress: polygonV4Deployment.contracts.MinSharesSupplyFee,
        onlyRemoveDustExternalPositionPolicyAddress: polygonV4Deployment.contracts.OnlyRemoveDustExternalPositionPolicy,
        onlyUntrackDustOrPricelessAssetsPolicyAddress:
          polygonV4Deployment.contracts.OnlyUntrackDustOrPricelessAssetsPolicy,
        performanceFeeAddress: polygonV4Deployment.contracts.PerformanceFee,
        policyManagerAddress: polygonV4Deployment.contracts.PolicyManager,
        protocolFeeTrackerAddress: polygonV4Deployment.contracts.ProtocolFeeTracker,
        unpermissionedActionsWrapperAddress: polygonV4Deployment.contracts.UnpermissionedActionsWrapper,
        valueInterpreterAddress: polygonV4Deployment.contracts.ValueInterpreter,
        vaultLibAddress: polygonV4Deployment.contracts.VaultLib,
      },
    },
  },
};
