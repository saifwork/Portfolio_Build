'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3d6ff20c7f13465e9f2b7af3ef00de50",
".git/config": "5808387cfe669b0559ac7de5b25be0b7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7bd5d461818b174729cd787d56046f2c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4da5ef9f9f4107b95605f2b8e19f9089",
".git/logs/refs/heads/main": "36a1e21623893385959333190505d342",
".git/logs/refs/remotes/origin/main": "4df085b00858aa2719da5d8cb245afdf",
".git/objects/03/1222d0b0153a15204036c1f758829dccf54515": "d1d3f0dc752c57507626da61426f18f3",
".git/objects/05/9c560a2fff8f6cdca8a2dd305c90d785c73946": "ae1ddc1bf943b8c10c6df21caf8ba4e5",
".git/objects/0e/09de6acb3ff333d3ba447026a4c8b2ebc483c2": "e06fc76de0505ae641688747a12a9bde",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/a3b69be1edf5bfeaddb47d4e3f2e76d3e8f2d6": "0f1dea12f7c33fb9d2d9464f88d96fa4",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/1ebb26e45ed94cf69a9a3244e282286dedaef2": "a11db01a758e4e161dc8cec6add156eb",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/b30c117265072ede6f84727aae77710ad4a952": "6a7ed0e012140e7524801607f2306cd8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/9f8c31a7dee4effa0f707e46bcb1c611f6841c": "cae5e6c4c8bdb85fb0957d43aeab590c",
".git/objects/22/530f0965a7611d88b0b4be67e7a1f3a437d9a1": "d5eeaa6138516fa20be2197c0195e0f8",
".git/objects/22/7ca1eaec47493705b8d729e58c876886352525": "945e63bac3dac5484458f1f15622521b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/39b7c7ef83f0b0345bc8d9df8e3ce103e6de5e": "1b5f727bb42417f8e29680e342085019",
".git/objects/26/0c0d242aae94880c8924e56714242400b857f1": "e255c7056f14110312e751a8a696b18a",
".git/objects/2f/8f14f8f8fafaa396c5b577f8df44bd6de1febd": "ade48a99b1e9839cd8fc52bda24429bc",
".git/objects/2f/c9568b77a408da7a5093ea785acf0f8ac286a7": "291bc0b5423e154decf7fdd7a9011b2b",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/36/62c41a16911733709f9a17808643097ef59316": "7442a6993cad500bfd4f5493800454ec",
".git/objects/3d/760adc04d4b8e7443dfdb9f71d69732ae751e0": "35e45ace91e06b4132705acfccc3da51",
".git/objects/43/9e48c13326d0db1da50bf5dbee0032572a5ce1": "ce81dc06367cb5732265cd23c945f10f",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/47/b9cf57886593c698119b800010ea74968e463c": "2ee822dbc6a61a205c712e4590143704",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/2baf7f468bd5a343e9131ac96d138280692148": "c6aea5ac190e4672d1daf7cf2721af96",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/c05d8ba9a09a5e0352f7a7b88a11bd707fb9d3": "c78bdbcb5fd3c4d37bd5e85ab459995a",
".git/objects/59/30142e05fd3626644b48d0200911f90ec49629": "90633a52e8d989ee51cf0e54a5e1b04e",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/f540dee32600b4f74e61cca63c13c5b0bc706e": "a0b0e50ab5b903c2bb136002d0afe079",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5e/323f3367ae6ee9ab234db228bbb5a1b2173256": "0984bb065a07b36f4d151313fd7a449e",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/66/ce0296856dca061c5a4f466746dc81f9d3464c": "4ad0ca0f9b0ddfd24512ef5e20146836",
".git/objects/68/70514dfe050ef915c12f937d705c87a1d2bae0": "c32fa415589aad80a6ee35d0af7261ad",
".git/objects/69/098fa656bec78d7cd813c07886a6d16329b2e3": "4eee016d58d875fe63133166e414e9cd",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6e/c3df6666ef7a9e11e8887b04018530d600aee6": "e4cf35c4c237677420316b0d019ce204",
".git/objects/6f/bcb52edf716f6e296d7f00b162a58393e94c78": "a0fece1f1d61f02a7a1cca5346168a37",
".git/objects/70/636864a4a0cbc65b719a9a1d8da14e5adb0c6a": "1dc762de9152d7aa8965e7592e975a5b",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/89c92efbc7f0718fc9fadcb6e75ecf9d6895d6": "22ada2eda9b1546680dcde14e8c9229e",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/69ee31174ab443f7cc0c36bff47bb458ebfe8b": "22f9ccc578ef642b69572a8dd1dd4dd8",
".git/objects/7a/6ac097990a98331f5e3f427db8004c5706df3d": "2bc0cefa18cdb6682ee022997b1d9dcf",
".git/objects/81/c9326700fc7980b5324b34b154ab8444088076": "6d3dff03dd00d9a323fb997bc48722a5",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/5513d5c13fa3d6e3e9d213f468be70d56a955e": "61c2eb8814e6c27a1d24a6362e6773a7",
".git/objects/9a/6bb431cd17a199dd119fd7b227fea0bee455ee": "6db2a44a4a12fc60619e9045dccf27a8",
".git/objects/9e/ee490153049abbdcc582f762477e8dde9040a5": "6e44d49299a903533babb0f8661562eb",
".git/objects/9f/e7de990bd50283a74d5dc4eda0c53641b1229e": "6e8b7f67b09f5e5f5eebabcb15e73e30",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/a7/4b3970bd84ef7b1e017f0393587ce62d68c376": "ca5c89c014b94a5960e7917c565b29c0",
".git/objects/a8/cd42d3037d13fe4da9c78db92d806b7e9a72b1": "ff1c5ee6e9dc5886f26d6b27902c2a54",
".git/objects/ac/168df93de16954efedba9f215bbe1e2647d8fa": "9a24e8258776359319a8ae8073625f02",
".git/objects/b0/b2a18d01ae30585a2b2dd81e1ac2e6e1ca24b9": "d544473b9240220ccf7d86842da221e3",
".git/objects/b1/ea2a9902f964200468ac59f5ad73c90f2885ce": "f540c6a13229286632fd7b095b28b59d",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/84565191111423dcf891611bb38de73556ae8a": "100a64df0ae55f2ee97029b36e83704e",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c8/902698167a07ed9d29c0d49614d00166c972e1": "f9673f06fad90e7a51d633af70da4dde",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/dafe3e972676d4162f2c2c3b493ee043cbdd7a": "2a6aa76e4c724769ec35f2c3b4949ac4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/581e9dc3c784585ed19c8fdc074e3e1c664878": "ca555ad3a57334f56d040f40c44dc90d",
".git/objects/dc/5129f302f4cfb3be8c41a0a851f009e1261ce0": "8377d6a8d6d3b86c1e74bd8d73dd4165",
".git/objects/dc/679a3f281ffee1c8ca09315b823b225138ec23": "468b213d3030c637150048a7e8ec92f0",
".git/objects/e1/b24419211a6293babf92839744bc871bde4d77": "cb51f98d189a3b91f3239dfdb134b917",
".git/objects/e4/1d25ef339100765e32b9fa310dfad56190e19a": "d476ee0d00872307288cd5e7b522269b",
".git/objects/e7/1140ae346a77825c1bc75f89ab70baeaf84227": "18fb597aaa1b48410318278af7fcb850",
".git/objects/eb/25e926fc75f9f8ebe93f79f776d0e7fa54c385": "8e57e6b5dba23279ae076dbe304527d3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/106fb877fc44112ee0e142c7d84cc8e4e85b11": "c34a68ebac58e92f07d2f452b14a7fb5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/b53255c8705567a8bb684eaa3348d169a788fc": "d1f71907db7e92951770485086d65360",
".git/objects/f5/6e3c00b7ae1b48c9d2cca2d7e5d4bd4d45be51": "cc5045cd1d9ae1c32e6f1d8f95e6667b",
".git/objects/f7/0c21ed8c7e43fccd696bca638bb3106a165774": "2d43e7eff37035e3fde406b94a6a2dba",
".git/objects/f7/eaf61e2d736d490bb4e8b6aa593e217fadb956": "7f0fdcb7eebfad2a793b4e49c88ed3d9",
".git/objects/f8/a9dcf77512f83292f85b8a037555fd25d59de6": "75052e0670b64bd6edd27bbe399f623d",
".git/objects/fb/8542553c261ba6311549a5eaadd5c06277a7dd": "182c9aa3d7e6f2eec13da6174c3b3acd",
".git/objects/fb/dc2fe82b62f2d2ce75355adf363641e0440ab3": "be093a474676d7dcf510e88f8f3098ce",
".git/objects/fd/b0d39fb5f1e27e378abb11b332125e4426d1cc": "860190a0600eb0e96171280dd78d2df9",
".git/objects/fd/ff89fe44be70292a19261a0a3403c80d29386b": "97b022fa252eb09514b47f2fe0c4086a",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "c546d89874970a08883509934b0e2450",
".git/refs/remotes/origin/main": "c546d89874970a08883509934b0e2450",
"assets/AssetManifest.bin": "70b4e73027a270107fa02394a47dcb94",
"assets/AssetManifest.bin.json": "eb78f238d13720f720afa587cbb48505",
"assets/AssetManifest.json": "cd8381a6cc2a3fb1256359634236fe63",
"assets/assets/icons/about.svg": "39366be60de6cfc56ff8f75eb6492944",
"assets/assets/icons/clock.svg": "b9ff6dd2862543c3b9743a455bbffd82",
"assets/assets/icons/currencycon.svg": "4b5025f712dfefcab3d74989173fc76c",
"assets/assets/icons/education.svg": "79004972fb9c69f951cdfcf6d62d1e37",
"assets/assets/icons/email.svg": "8ca902092afc91d04aaef335c922ea1a",
"assets/assets/icons/experience.svg": "0bdfa307bec7129e3132982e20596c83",
"assets/assets/icons/flutter.svg": "356b8423fb4c37e3babe292a9e03c975",
"assets/assets/icons/github.svg": "c3f1f5f1551becd97ed24b366405512a",
"assets/assets/icons/heart.svg": "2ff852b7a78c82c20542ccef39b66a20",
"assets/assets/icons/linkedin.svg": "04c090ac7804d16d460a2ae4723fe79a",
"assets/assets/icons/netflix.svg": "402af682d80bb66d89a8b58722b7a06b",
"assets/assets/icons/resume.svg": "c18efaf89e802a6aa55287d2fd3b14ec",
"assets/assets/icons/skill.svg": "4f651dbeb9c47d5df51b4aff90e4d7e6",
"assets/assets/icons/sorting.svg": "4b51d3f4c518a67dc2923bbdaf975da3",
"assets/assets/icons/tictactoe.svg": "49e01821d9d438e99b614e37a385eff0",
"assets/assets/images/cloudRed.svg": "bda20cdd4888404719f432377a3665f9",
"assets/assets/images/cloudyBlue.svg": "e9d5e246793cd42bc01f6809d826583d",
"assets/assets/images/profile01.jpeg": "4dfc963c14056d19a26878aee18bae6e",
"assets/assets/rive/casette_tape_loading.riv": "4097b0c0aa0d65f5be7d656eb473caf2",
"assets/assets/rive/cosmos-transparent.riv": "91ebe0f2ff1fc30e2e315a99f7627c74",
"assets/assets/rive/rain.riv": "91a917f7343f7ac4523955e4ac8ca7f6",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "c94708cbb7ed12e3473b3c2194dcaf26",
"assets/NOTICES": "ec90dd25fb08dfca2687ec3b9ace7ccc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ec128ccbfcd124b01575c1989f3166ab",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "93f0aed3ab0a0084024e2b0cb8438eb5",
"/": "93f0aed3ab0a0084024e2b0cb8438eb5",
"main.dart.js": "655a4c846e09469c9af65706e7a7ca50",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
