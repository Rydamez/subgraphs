import { Context } from '@enzymefinance/subgraph-cli';
import { Variables } from '../subgraph.config';
import { getEnvironment } from '@enzymefinance/environment/all';
import { Deployment, Version } from '@enzymefinance/environment';

const ethereumDeployment = getEnvironment(Deployment.ETHEREUM, Version.SULU);

export const ethereum: Context<Variables> = {
  name: 'enzymefinance/enzyme-core',
  network: 'mainnet',
  variables: {
    block: 11636493,
    dispatcherAddress: '0xC3DC853dD716bd5754f421ef94fdCbac3902ab32',
    curveMinterAddress: '0xd061d61a4d941c39e5453435b6345dc261c2fce0',
    cvxLockerV2Address: '0x72a19342e8f1838460ebfccef09f6585e32db86e',
    cvxAddress: '0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b',
    externalPositionFactoryAddress: '0x0aacb782205dde9eff4862ace9849dce1ca3409f',
    wethTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    chainlinkAggregatorAddresses: {
      audUsd: '0x77F9710E7d0A19669A13c055F62cd80d313dF022',
      btcEth: '0xdeb288F737066589598e9214E782fa5A8eD689e8',
      btcusd: '0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c',
      chfusd: '0x449d117117838fFA61263B61dA6301AA2a88B13A',
      ethUsd: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
      eurUsd: '0xb49f677943BC038e9857d61E7d053CaA2C1734C1',
      gbpUsd: '0x5c0Ab2d9b5a7ed9f470386e82BB36A3613cDd4b5',
      jpyUsd: '0xBcE206caE7f0ec07b545EddE332A47C2F75bbeb3',
    },
    releases: {
      v2: {
        adapterBlacklistAddress: '0x9f471f573414d9cAcFe3A0127aD12F195504de7B',
        adapterWhitelistAddress: '0xb4dF8b4f3eC62619E8D2aed5df360aa393BB8745',
        aggregatedDerivativePriceFeedAddress: '0xCFb6F4C08856986d13839B1907b5c645EE95388F',
        assetBlacklistAddress: '0x2A7CD39427831045e7050723006697fD0801B184',
        assetWhitelistAddress: '0x664F6C88CA8d5888b11B97450A5623003b8981B9',
        buySharesCallerWhitelistAddress: '0x21fc97450c65dAfe14255A06Cf9c5C88483bA309',
        chainlinkPriceFeedAddress: '0xfB3A9655F5feA18caC92021E83550F829ae6F7F7',
        comptrollerLibAddress: '0x94F262802806BE3646612D0705802710dD5B58dF',
        entranceRateBurnFeeAddress: '0xA831a43f99af957bc27D03963958Fd710DC1f50E',
        entranceRateDirectFeeAddress: '0x42bc95f119Fb08b9FC72262D255016fa5546caa4',
        feeManagerAddress: '0xEcDbcdB8Dbf0AC54f47E41D3DD0C7DaE07828aAa',
        fundActionsWrapperAddress: '0x38c9f2870003d47f704e317C10f93Ca1ddAE67C1',
        fundDeployerAddress: '0x9134C9975244b46692Ad9A7Da36DBa8734Ec6DA3',
        guaranteedRedemptionAddress: '0xda9d4Ee6C846E0b504979ea3d607c2e98574A09C',
        integrationManagerAddress: '0xFc3f356217120318Bd46c879b3A55C3135473752',
        investorWhitelistAddress: '0x3C8a4DaCe64B238C8307E3AF563fCf76Cf870d57',
        managementFeeAddress: '0x889f2FCB6c12d836cB8f7567A1bdfa512FE9f647',
        maxConcentrationAddress: '0x6b9a7604faB14721B51A89Cd1CcEF639Da8664eE',
        minMaxInvestmentAddress: '0xDCCae078656f20B0851Dd35683315be56AEEe8f3',
        performanceFeeAddress: '0x70478df01108Cb2fCB23463814e648363CE17720',
        policyManagerAddress: '0x4c2c07b15b0b32Bad989d9DeFaeC775e2aA8A7AD',
        valueInterpreterAddress: '0x6618bF56E1C7b6c8310Bfe4096013bEd8F191628',
        vaultLibAddress: '0xAC3fe07F51C51153E181bE892e4e37326EEA13Da',
      },
      v3: {
        adapterBlacklistAddress: '0xA2A031B137452986B0E8fA32c9430D29b9b0494F',
        adapterWhitelistAddress: '0x306f571110C5441a8481d3CD7E8B16A7E2E967E3',
        aggregatedDerivativePriceFeedAddress: '0x2E45f9B3fd5871cCaf4eB415dFCcbDD126F57C4f',
        assetBlacklistAddress: '0xdC1e40174ad831e505E8191881A66e90c3681E33',
        assetWhitelistAddress: '0xA3b7B872407452E38dFfACa8dA2dB3eD6D756Ad1',
        buySharesCallerWhitelistAddress: '0xbc91dcc90ccdd0b51e3c623528cb886358c60105',
        chainlinkPriceFeedAddress: '0x1fad8faf11E027f8630F394599830dBeb97004EE',
        comptrollerLibAddress: '0x1A7CBEDf13E25818dC377d2B1277E03e5d496300',
        entranceRateBurnFeeAddress: '0x27F74B89B29508091014487253d8D9b88aa0264A',
        entranceRateDirectFeeAddress: '0x30a398Eb63B62bF2865F90e37752c8300Ef22F05',
        feeManagerAddress: '0x5d0a363e9a17fb839e2843ffa93c808cdafccb67',
        fundActionsWrapperAddress: '0xbc9a63cad5a825bD5854Abca4f3D42d6aCF9Bffa',
        fundDeployerAddress: '0x7e6d3b1161DF9c9c7527F68d651B297d2Fdb820B',
        guaranteedRedemptionAddress: '0x08d4225f0995d770c4c8ea85380602b3499164a9',
        integrationManagerAddress: '0x965ca477106476B4600562a2eBe13536581883A6',
        investorWhitelistAddress: '0x775f8d5d016c4d8a1427982148ec2170282c7784',
        managementFeeAddress: '0x45f1b268cc6412b454dae20f8971fc4a36af0d29',
        maxConcentrationAddress: '0xdee63b253432a443a09bf8461f20256d184319de',
        minMaxInvestmentAddress: '0x016a7287f0fdbdce5f903334f574b2238be3fa25',
        performanceFeeAddress: '0x3c3f9143A15042B69eB314Cac211688A4E71a087',
        policyManagerAddress: '0x0Bd9f0465d21d4c300c7B8d781A013bdc87A31E8',
        valueInterpreterAddress: '0x10a5624840Ac07287f756777DF1DEC34d2C2d654',
        vaultLibAddress: '0x1b3694907Ed7459c7B0116e7c6a4B7788288577F',
      },
      v4: {
        addressListRegistryAddress: '0x4eb4c7babfb5d54ab4857265b482fb6512d22dff',
        allowedAdapterIncomingAssetsPolicyAddress: '0x2f0e55830a173d845a886fd574f01a039a07fc37',
        allowedAdaptersPolicyAddress: '0x720ef97bf835699fcf07591952cd2b132d63a6c0',
        allowedAssetsForRedemptionPolicyAddress: '0x823ca839da344da59d517b84ce3bab9ffc9f54ee',
        allowedDepositRecipientsPolicyAddress: '0xa66baaa0ccb6468c5a2cb61f5d672c7ba0440ee1',
        allowedExternalPositionTypesPolicyAddress: '0x9e076e7d35a3b881ab9e3da958431630fdfa756f',
        allowedSharesTransferRecipientsPolicyAddress: '0xebe37e43bc6b3aacfe318d6906fc80c4a2a7505a',
        comptrollerLibAddress: '0x03f7f3b8da875881206655d8099b9dacf721f1ef',
        cumulativeSlippageTolerancePolicyAddress: '0x3a49d5aec385ac1bde99f305316b945c5ee71312',
        entranceRateBurnFeeAddress: '0xcdec5bbecc6d2c004d5378a63a3c484c2643ed9d',
        entranceRateDirectFeeAddress: '0xfb8df7d5e320020cd8047226b81cf6d68f3e3c19',
        exitRateBurnFeeAddress: '0x06b13918e988d1314da1a9da4c0cde5fe994364a',
        exitRateDirectFeeAddress: '0x3a09d11c20aa1ad38c77b4f426901d3427f73fbe',
        externalPositionManagerAddress: '0x1e3da40f999cf47091f869ebac477d84b0827cf4',
        feeManagerAddress: '0xaf0dffac1ce85c3fce4c2bf50073251f615eefc4',
        fundDeployerAddress: '0x4f1c53f096533c04d8157efb6bca3eb22ddc6360',
        gasRelayPaymasterFactoryAddress: '0x846bbe1925047023651de7ec289f329c24ded3a8',
        integrationManagerAddress: '0x31329024f1a3e4a4b3336e0b1dfa74cc3fec633e',
        managementFeeAddress: '0xfaf2c3db614e9d38fe05edc634848be7ff0542b9',
        minAssetBalancesPostRedemptionPolicyAddress: '0x58c0a2a546b3903fa68a53e34ee0c8a02aabfad0',
        minMaxInvestmentPolicyAddress: '0xebdadfc929c357d12281118828aea556db5be30c',
        onlyRemoveDustExternalPositionPolicyAddress: '0x966ec191ed9e026cb6f7e22bb2a284bad6a2838d',
        onlyUntrackDustOrPricelessAssetsPolicyAddress: '0x747beaee139fba4a89fa71bebb5f21231530292b',
        performanceFeeAddress: '0xfedc73464dfd156d30f6524654a5d56e766da0c3',
        policyManagerAddress: '0xadf5a8db090627b153ef0c5726ccfdc1c7aed7bd',
        protocolFeeReserveLibAddress: '0xa0ed89af63367ddc8e1dd6b992f20d1214ccb51c',
        protocolFeeTrackerAddress: '0xe97980f1d43c4cd4f1eef0277a2dea7ddbc2cd13',
        unpermissionedActionsWrapperAddress: '0xcfab4fcbfe059d5c1840d9dc285a9bfa0f96a118',
        valueInterpreterAddress: '0xd7b0610db501b15bfb9b7ddad8b3869de262a327',
        vaultLibAddress: '0x891dee0483ebaa922e274ddd2ebbaa2d33468a38',
        curveLiquidityAdapterAddress: ethereumDeployment.contracts.CurveLiquidityAdapter,
        convexCurveLpStakingAdapterAddress: ethereumDeployment.contracts.ConvexCurveLpStakingAdapter,
      },
    },
  },
};
