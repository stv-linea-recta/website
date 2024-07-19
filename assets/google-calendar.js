/**
 * Format Google Calendar JSON output into human readable list
 *
 * Copyright 2017, Milan Lund
 *
 */
// ison svg collection
const iconSize = `4em`

const calendar = `<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}"viewBox="0 0 187.96 176.22"><path fill="var(--primary-color)" d="M 10.972111,44.261462 H 198.29711 v -15.875 c 0,-2.930789 0.36883,-6.14283 -0.42174,-8.995832 C 193.33723,3.0151708 173.97212,5.6322968 160.99086,5.6322968 V 18.332296 c 0,2.242344 0.30877,4.772819 -0.62521,6.879167 -2.06004,4.645289 -7.8867,4.725987 -10.44813,0.529166 -1.1512,-1.886479 -0.83291,-4.501885 -0.83291,-6.614583 V 5.6322968 H 55.422112 V 19.39063 c 0,2.294202 0.348985,4.87336 -1.01944,6.875197 -2.631016,3.848365 -8.328818,3.21654 -10.148887,-1.054364 -0.847196,-1.988079 -0.47334,-4.500563 -0.47334,-6.614583 V 5.6322968 H 30.022111 c -3.03027,0 -6.10605,-0.240559 -8.99583,0.8551862 -11.8563498,4.495535 -10.05417,18.652013 -10.05417,28.778146 v 8.995833 m 0,12.170832 v 85.460406 17.99167 c 0,5.579 0.0495,11.26464 3.73777,15.85119 4.42092,5.49725 10.70742,5.58006 17.164314,5.58006 H 55.422112 157.55128 c 12.72381,0 29.86617,3.17659 38.43179,-8.73125 3.12526,-4.34499 2.84321,-8.93498 2.84321,-14.02292 V 139.51146 56.432294 H 10.972111 m 37.570834,21.775472 c 4.239684,-0.626533 8.942917,-0.0799 13.229167,-0.07964 1.909233,0 4.06744,0.02937 5.415227,1.616076 1.43854,1.69386 1.199356,3.98965 1.199356,6.05684 0,4.60851 2.032265,15.096068 -4.233333,16.280338 -4.312444,0.81545 -9.369954,0.13097 -13.758333,0.12383 -1.900767,-0.003 -3.894932,-0.21088 -5.119952,-1.86346 -1.284552,-1.733018 -0.965465,-4.048388 -0.965465,-6.074038 0,-4.60243 -2.125662,-15.12041 4.233333,-16.059947 m 46.037503,0.0074 c 4.41404,-0.775759 9.539552,-0.09419 14.022912,-0.08705 1.89442,0.0029 3.83435,0.292629 5.07895,1.898127 1.2356,1.59411 1.00647,3.88196 1.00647,5.77479 0,4.31509 2.07645,15.168828 -3.70417,16.280338 -4.46828,0.8591 -9.73746,0.12568 -14.287502,0.12383 -1.94363,-8e-4 -3.85339,-0.18098 -5.12286,-1.86346 -1.12871,-1.495958 -0.96255,-3.248818 -0.96255,-5.015708 0,-4.08993 -1.13427,-10.17217 0.25664,-14.02292 0.59479,-1.64703 1.99443,-2.78606 3.71211,-3.087949 m 47.095832,-0.0074 c 4.40505,-0.650875 9.3046,-0.08678 13.75833,-0.07964 1.84971,0.0029 3.91769,0.26326 5.10673,1.876959 1.13718,1.54331 0.97869,3.46154 0.97869,5.26679 0,4.18889 0.95594,9.73032 -0.20876,13.75834 -0.49953,1.727458 -1.75895,2.723088 -3.49541,3.051168 -4.47542,0.84614 -9.73269,0.13124 -14.2875,0.12383 -1.92008,-0.003 -3.8809,-0.22543 -5.14111,-1.86346 -1.29805,-1.686988 -0.9443,-4.080938 -0.9443,-6.074038 0,-4.57015 -2.09974,-15.12411 4.23333,-16.05995 M 49.072112,130.85588 c 4.203171,-0.52308 8.728869,-0.0825 12.964583,-0.0757 1.909763,0.003 4.087284,0.24077 5.34379,1.87986 1.2573,1.64015 1.00621,3.85524 1.00621,5.79305 0,4.33017 2.013479,15.15851 -3.96875,16.31421 -4.364566,0.84296 -9.575271,0.0902 -14.022916,0.09 -2.012421,0 -3.807355,-0.10531 -5.122863,-1.86267 -1.389062,-1.85552 -0.962554,-4.42489 -0.962554,-6.604 0,-4.9657 -2.088621,-14.68173 4.7625,-15.53474 m 46.037496,7.9e-4 c 4.45082,-0.58685 9.536382,-0.26432 14.022922,-0.0661 1.77403,0.0786 3.64331,0.6022 4.68683,2.15239 1.07262,1.59332 0.86942,3.6867 0.86942,5.51021 0,4.16931 0.74957,9.17443 -0.27622,13.22917 -0.42334,1.67296 -1.70392,2.85512 -3.42795,3.11864 -4.46722,0.68316 -9.50145,0.0564 -14.022912,0.0564 -2.12805,0 -4.01797,-0.014 -5.44539,-1.85605 -1.33906,-1.728 -0.90461,-4.29737 -0.90461,-6.34604 0,-4.79054 -2.12963,-14.92435 4.49791,-15.79853 m 47.095842,-7.9e-4 c 4.19867,-0.52256 8.7331,-0.0958 12.96458,-0.0754 1.91744,0.009 3.99838,0.27199 5.26389,1.8796 1.28323,1.63036 1.08611,3.57928 1.08611,5.52847 0,4.13729 0.7919,9.19744 -0.13996,13.22916 -0.38497,1.66529 -1.58671,3.01864 -3.29962,3.34963 -4.44606,0.85884 -9.75678,0.09 -14.2875,0.09 -2.10741,0 -4.02326,-0.0373 -5.44248,-1.86267 -1.36499,-1.75551 -0.90752,-4.52543 -0.90752,-6.604 0,-4.98422 -2.09286,-14.6812 4.7625,-15.53474 z" transform="translate(-10.87 -5.48)"/></svg>`;

const gymnast = `<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" viewBox="0 0 153.77 126.96"><path fill="var(--primary-color)" d="m 115.94557,85.102385 c -0.40799,4.673071 -2.41142,9.250627 -2.86544,14.022917 -0.99351,10.439408 2.38628,21.198948 7.51655,30.162498 1.58617,2.77125 3.33057,6.05949 5.93248,8.00074 4.87892,3.6404 12.21952,2.33865 15.00796,-3.23824 3.96293,-7.92585 -4.80351,-15.37255 -7.19878,-22.48958 -1.76371,-5.24086 -2.05078,-11.09001 -0.43762,-16.404168 0.7321,-2.411942 2.19816,-4.513262 2.94693,-6.879167 3.64331,2.58789 6.477,7.183702 9.37339,10.583334 5.93593,6.967011 11.85413,13.949631 17.80699,20.902081 3.1967,3.73354 6.52939,9.34853 11.18421,11.31544 8.89106,3.75708 16.94418,-6.13966 12.04806,-14.22585 -3.42159,-5.65044 -8.77861,-10.73891 -13.1064,-15.7226 -6.86567,-7.906019 -13.4493,-16.04963 -20.2983,-23.964904 -3.27449,-3.784336 -6.48203,-7.621059 -9.78879,-11.377083 -2.20848,-2.50878 -4.54025,-5.525823 -7.48374,-7.215717 -3.6502,-2.0955 -8.20553,-3.187435 -12.17084,-4.559565 -5.31151,-1.837795 -10.55502,-3.873764 -15.875,-5.686424 -3.42767,-1.167871 -8.52381,-2.0828 -11.373114,-4.338373 -3.39514,-2.687638 -5.76369,-6.93129 -8.98949,-9.901238 -9.04769,-8.330406 -19.48206,-14.920382 -31.23115,-18.703024 -4.68154,-1.507226 -10.95481,-4.071938 -15.875,-2.537831 -6.29504,1.962706 -8.31485,10.28446 -3.16439,14.678395 3.56127,3.038211 9.64007,3.114411 14.01231,4.530725 7.50094,2.429933 14.59203,6.440223 20.6375,11.486885 2.18493,1.823773 6.53971,4.763029 7.24641,7.694083 0.39634,1.644121 -0.5969,3.986477 -1.07024,5.55625 -1.01018,3.351742 -1.96983,6.877315 -2.61488,10.31875 -2.01639,10.757165 -2.82813,22.151446 -3.30703,33.072921 -0.2577,5.8756 -2.87813,13.68187 3.45096,17.40984 4.28969,2.52678 10.33436,0.7112 12.33911,-3.91636 1.12316,-2.59212 0.9316,-5.70944 1.19856,-8.4664 l 1.76213,-18.256251 c 0.20902,-2.187046 0.4572,-4.420923 0.56383,-6.614583 0.0402,-0.824707 -0.11086,-2.144184 0.67548,-2.695575 1.14591,-0.803275 4.75377,1.187979 5.94942,1.624806 5.276584,1.928283 11.617324,5.273939 17.197924,5.833268 M 56.678896,42.881501 c -2.95884,0.40296 -5.56922,1.333235 -7.9375,3.199606 -11.37351,8.962231 -3.49832,28.59405 11.1125,26.506487 6.25157,-0.893233 11.83852,-5.727435 12.87859,-12.091458 1.52189,-9.310952 -6.2148,-18.954485 -16.05359,-17.614635 z" transform="translate(-34.98 -12.37)"/></svg>`;

const beer = `<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" viewBox="0 0 62.14 78.7"><path fill="var(--primary-color)" d="m 80.313453,26.393225 c -1.60788,-0.45963 -3.07393,-1.35808 -4.76251,-1.54157 -4.87018,-0.52922 -9.44589,2.57331 -10.58333,7.3624 -2.52394,-0.57695 -4.77187,-0.76546 -7.14375,0.53856 -4.66429,2.56437 -5.55125,9.04476 -2.03052,12.93059 2.84406,3.13875 7.21138,2.67044 11.02635,2.67044 v 10.84791 c 0.003,1.63989 0.19527,3.42874 2.11773,3.85393 1.67031,0.36909 3.06943,-0.97764 3.35148,-2.53127 0.69426,-3.82641 0.087,-8.28093 0.087,-12.17057 h 5.29167 c 0,2.26801 -0.60828,5.58959 0.41619,7.66895 0.92842,1.88462 3.6658,2.12169 4.75456,0.2196 1.10808,-1.93569 0.3855,-5.70574 0.3855,-7.88855 h 12.96459 c 2.66382,0 5.386117,0.14049 7.672907,-1.49172 4.57703,-3.26676 4.64053,-10.05615 0.26459,-13.48624 -1.85024,-1.45034 -4.08835,-1.69055 -6.349997,-1.69079 -0.0781,-3.75677 -2.1463,-7.09772 -5.55625,-8.73533 -3.81741,-1.83332 -10.09439,-0.74723 -11.90625,3.44366 m -22.48959,23.8125 v 34.39584 c 0,3.65442 -1.27656,10.33753 0.76171,13.49348 2.11061,3.268125 5.93463,2.646095 9.29246,2.646095 h 23.8125 c 3.23321,0 7.50411,0.66331 9.427897,-2.646885 2.09312,-3.60125 0.89085,-9.97638 0.89085,-14.02186 v -33.3375 l -15.874997,0.26458 c 0,2.36696 0.23707,4.84532 -1.22714,6.87811 -2.85776,3.96796 -7.87135,2.46697 -9.62078,-1.58644 h -0.26458 c 0,2.04999 0.34105,4.46828 -0.64611,6.35 -2.02036,3.85022 -7.03633,4.09972 -9.44685,0.52811 -2.07415,-3.0734 -1.01954,-8.61986 -1.01954,-12.16978 l -6.08542,-0.79375 m 46.831247,5.02708 v 2.64584 c 2.65642,0 5.45439,-0.44106 7.33452,1.85605 1.36022,1.66185 0.86757,4.33705 0.86757,6.34603 v 14.55209 c 0,1.95712 0.41936,4.42436 -0.94139,6.03646 -1.78435,2.11376 -4.8006,1.63645 -7.2607,1.63645 v 2.64584 c 3.44779,0 6.96516,0.5027 9.46838,-2.38522 1.80684,-2.08413 1.64412,-4.82786 1.64412,-7.40437 v -15.61042 c 0,-2.75801 0.26062,-5.68536 -1.67454,-7.92691 -2.48735,-2.88079 -6.0161,-2.39184 -9.43796,-2.39184 m -12.435407,2.38125 v 35.71876 h -2.64584 v -35.71876 h 2.64584 m -11.1125,8.46667 v 27.25209 h -2.64584 v -20.6375 c 0,-2.94138 -1.12871,-6.61168 2.64584,-6.61459 m -10.84792,27.25209 c -0.80778,0 -2.31458,0.27331 -2.75088,-0.61331 -0.58128,-1.18163 -0.15954,-3.38164 -0.15954,-4.67836 v -10.84792 c 0,-1.19406 -0.50138,-3.89096 0.27199,-4.86754 0.60325,-0.76173 2.27621,-0.52758 2.55429,0.40878 0.56409,1.90024 0.0841,4.59582 0.0841,6.57543 v 5.55625 z" transform="translate(-53.64 -22.1)"/></svg>`;

const free = `<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" viewBox="0 0 43.8 65.58"><path fill="var(--primary-color)" d="m 94.749002,55.44851 c -1.490247,-0.90867 -1.526841,-1.106009 -1.670531,-9.009002 l -0.132292,-7.276041 -4.630208,-0.132292 -4.630209,-0.132291 -4.569461,-1.807562 c -2.513203,-0.994159 -4.922069,-2.104261 -5.353034,-2.466893 -2.416114,-2.033027 -1.12066,-6.079204 2.038771,-6.367828 1.101598,-0.100634 1.827379,0.113906 5.497825,1.625151 3.965425,1.632698 4.356631,1.74109 6.283855,1.74109 1.130343,0 2.055169,-0.10047 2.055169,-0.223266 0,-0.122796 0.352062,-2.529017 0.782359,-5.347155 0.430298,-2.818138 0.743424,-5.162825 0.695836,-5.210413 -0.04759,-0.04759 -2.751134,-0.448085 -6.00788,-0.889995 -3.381901,-0.45889 -6.175084,-0.966917 -6.512984,-1.184589 -1.410054,-0.908339 -1.938783,-2.960135 -1.145003,-4.443325 0.202406,-0.378198 0.854543,-0.921676 1.449195,-1.207728 1.081185,-0.520091 1.081185,-0.520091 9.944727,0.643631 4.874948,0.640048 9.246056,1.221883 9.713574,1.292966 0.766625,0.116556 1.363718,-0.261814 6.085419,-3.856271 2.87946,-2.1920291 5.59257,-4.2074411 6.02913,-4.4786921 2.91646,-1.812093 6.31985,1.415299 4.68527,4.4429711 -0.28513,0.528132 -2.5515,2.417106 -6.14048,5.117967 -3.12869,2.35448 -5.90388,4.488389 -6.16707,4.742019 -0.36958,0.35615 -0.71579,1.992117 -1.52056,7.18516 -1.04202,6.724012 -1.04202,6.724012 -1.04282,15.794489 -7.9e-4,10.054719 -0.0598,10.465408 -1.638519,11.427949 -1.136774,0.693071 -2.981418,0.702045 -4.100079,0.01995 z M 95.062846,12.853918 C 92.145204,12.146152 90.063287,9.2424149 90.55321,6.5641369 c 0.475046,-2.596951 2.464028,-4.4973114 4.978673,-4.7568459 5.022527,-0.5183701 8.153057,5.4568289 4.802177,9.16585 -1.414163,1.565311 -3.501501,2.310076 -5.271214,1.880777 z M 76.643167,10.752059 c -0.528575,-1.6791971 -0.59814,-6.8914621 -0.12873,-9.6453042 0.233447,-1.36954518 0.42445,-2.5981694 0.42445,-2.7302758 0,-0.1321068 -0.53625,-0.3985297 -1.191667,-0.592051 -1.535244,-0.4533037 -3.250694,-1.7002365 -3.599993,-2.6167762 -0.99684,-2.6156492 2.808801,-5.6611868 5.700356,-4.56182 1.180661,0.4488866 1.735031,1.7295241 1.736148,4.0106321 9.26e-4,1.8696159 0.04522,2.0317115 0.596302,2.1818525 0.327422,0.089205 3.571875,0.286407 7.209896,0.438227 8.880851,0.3706111 11.561016,0.7744259 15.673201,2.36145092 2.77603,1.0713579 7.99237,4.47397658 7.4494,4.85923758 -1.41874,1.006648 -1.60251,1.043904 -2.31917,0.470171 C 106.9377,3.9221539 103.55764,1.9909425 102.0743,1.4312511 98.287595,0.00245382 95.567642,-0.37030328 84.986497,-0.91055288 82.209401,-1.0523449 79.750494,-1.2400147 79.522259,-1.3275968 c -0.493241,-0.1892744 -0.847234,1.20901912 -1.314661,5.1929907 -0.282796,2.410328 -0.153631,4.298817 0.441736,6.4584911 0.113561,0.411939 -0.05912,0.62402 -0.77947,0.957341 -0.925347,0.428175 -0.925347,0.428175 -1.226697,-0.529167 z m 0.922707,-15.1786948 c 0.08774,-0.3274219 0.161163,-1.1765362 0.16315,-1.8869207 0.0036,-1.2916082 0.0036,-1.2916082 -1.023606,-1.1538293 -1.610217,0.2159753 -2.533203,0.7632877 -2.625416,1.5568193 -0.06866,0.5908929 0.08983,0.7747423 1.058333,1.2276211 1.151034,0.5382321 1.794033,0.7925435 2.100422,0.830734 0.09217,0.011488 0.239371,-0.2470026 0.327117,-0.5744244 z" transform="translate(-71.98 9.62)"/></svg>`;

const jump = `<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" viewBox="0 0 64.96 58.98"><path fill="var(--primary-color)" d="m 70.098122,55.396203 c -0.842733,-0.93349 -8.286056,-10.49855 -8.286056,-10.648016 0,-0.07357 0.758178,-0.133755 1.684841,-0.133755 h 1.684841 l 2.988172,3.846571 c 1.643495,2.115611 3.069482,3.75272 3.16886,3.638021 0.09938,-0.114703 1.408051,-1.796868 2.908163,-3.738145 1.500112,-1.941277 2.871387,-3.584818 3.047279,-3.652314 0.175892,-0.0675 0.983868,-0.08652 1.795503,-0.04228 l 1.475701,0.08044 -4.095228,5.291666 c -2.252375,2.910417 -4.291981,5.440495 -4.532458,5.622396 -0.646507,0.48903 -1.235787,0.404276 -1.839618,-0.264583 z m 35.529368,-5.01169 -4.38394,-5.637789 1.48744,-0.08044 c 0.8181,-0.04424 1.63136,-0.02521 1.80725,0.04228 0.17589,0.0675 1.54717,1.711037 3.04728,3.652314 1.50011,1.941277 2.8081,3.62276 2.90665,3.736628 0.0985,0.113867 1.52167,-1.523243 3.16252,-3.63802 l 2.98335,-3.845055 h 1.69118 c 0.93015,0 1.69118,0.05604 1.69118,0.124523 0,0.06849 -1.93742,2.598566 -4.30538,5.622396 -3.43913,4.391697 -4.44604,5.514279 -5.00448,5.579412 -0.62696,0.07312 -1.15158,-0.500346 -5.08305,-5.556249 z m -46.387196,-8.68413 c -0.323068,-0.130924 -0.664486,-0.545193 -0.758707,-0.920597 -0.251535,-1.002194 0.0056,-3.794228 0.384314,-4.17294 0.492874,-0.492873 63.624689,-0.475969 64.117829,0.01717 0.47047,0.470469 0.4705,4.397822 4e-5,4.868334 -0.27775,0.277778 -6.3867,0.353782 -31.750002,0.395017 -18.124449,0.02947 -31.654487,-0.04961 -31.993474,-0.186983 z M 94.099137,25.799225 c -2.173944,-0.867613 -3.887491,-3.522379 -3.647557,-5.651086 0.07007,-0.62168 0.322348,-1.521099 0.560613,-1.998709 0.238262,-0.47761 0.433205,-0.9038 0.433205,-0.947088 0,-0.04329 -0.506016,0.150984 -1.124479,0.431715 -1.276144,0.579263 -2.497884,0.649282 -4.034896,0.231243 -0.866095,-0.235563 -2.107353,-1.328649 -6.833526,-6.017795 -3.189146,-3.1641611 -6.021429,-6.203854 -6.325089,-6.7882813 -1.011529,-3.5144559 -1.047095,-7.0366868 3.016857,-7.9375002 2.116833,-0.073931 9.370357,-0.0758 9.370357,-0.0758 5.153697,-0.04169 9.370359,-0.01093 9.370359,0.06834 0,0.07928 -0.792064,1.3337757 -1.760143,2.78777503 L 91.364694,2.5456741 h -2.666401 -2.666402 l 2.50309,2.5135416 c 1.376699,1.3824477 2.594396,2.5135417 2.705992,2.5135417 0.111596,0 1.70044,-2.2471375 3.530763,-4.9936389 2.043875,-3.06694897 3.580235,-5.108627 3.981965,-5.291667 1.991739,-0.907497 4.068779,0.399034 4.068779,2.55940303 0,0.48917 -1.63621,3.16930557 -5.166879,8.46342237 -4.976486,7.4620731 -5.127991,7.7277191 -4.111581,7.2091861 0.68807,-0.351027 1.569021,-0.538372 2.531586,-0.538372 5.902524,0 7.741144,7.988651 2.430325,10.559576 -1.224288,0.592666 -3.269017,0.712634 -4.406794,0.25855 z M 105.35559,1.5534946 c 0.19474,-0.5457031 0.35408,-1.34937507 0.35408,-1.78593707 0,-0.436563 -0.15934,-1.24023503 -0.35408,-1.78593803 l -0.35409,-0.992188 h 1.91752 c 2.21578,0 3.07819,0.474852 3.57025,1.965824 0.23497,0.71194703 0.21575,1.09313403 -0.0923,1.83037303 -0.52257,1.25069357 -1.68635,2.38425077 -3.69372,1.76005357 h -1.70176 z" transform="translate(-58.38 3.01)"/></svg>`;

window.formatGoogleCalendar = (() => {

  'use strict';

  var config;

  const renderList = (data, settings) => {
      var result = [];

      //Remove cancelled events, sort by date
      result = data.items.filter(item => item && item.hasOwnProperty('status') && item.status !== 'cancelled').sort(comp).reverse();

      var pastCounter = 0,
          upcomingCounter = 0,
          pastResult = [],
          upcomingResult = [],
          upcomingResultTemp = [],
          upcomingElem = document.querySelector(settings.upcomingSelector),
          pastElem = document.querySelector(settings.pastSelector),
          i;

      if (settings.pastTopN === -1) {
          settings.pastTopN = result.length;
      }

      if (settings.upcomingTopN === -1) {
          settings.upcomingTopN = result.length;
      }

      if (settings.past === false) {
          settings.pastTopN = 0;
      }

      if (settings.upcoming === false) {
          settings.upcomingTopN = 0;
      }

      for (i in result) {

          if (isPast(result[i].end.dateTime || result[i].end.date)) {
              if (pastCounter < settings.pastTopN) {
                  pastResult.push(result[i]);
                  pastCounter++;
              }
          } else {
              upcomingResultTemp.push(result[i]);
          }
      }

      upcomingResultTemp.reverse();

      for (i in upcomingResultTemp) {
          if (upcomingCounter < settings.upcomingTopN) {
              upcomingResult.push(upcomingResultTemp[i]);
              upcomingCounter++;
          }
      }

      for (i in pastResult) {
          pastElem.insertAdjacentHTML('beforeend', transformationList(pastResult[i], settings.itemsTagName, settings.format));
      }

      for (i in upcomingResult) {
          upcomingElem.insertAdjacentHTML('beforeend', transformationList(upcomingResult[i], settings.itemsTagName, settings.format));
      }

      if (upcomingElem.firstChild) {
          upcomingElem.insertAdjacentHTML('beforebegin', settings.upcomingHeading);
      }

      // if (pastElem.firstChild) {
      //     pastElem.insertAdjacentHTML('beforebegin', settings.pastHeading);
      // }
  };

  //Gets JSON from Google Calendar and transfroms it into html list items and appends it to past or upcoming events list
  const init = (settings) => {
      config = settings;

      var finalURL = settings.calendarUrl;

      if (settings.recurringEvents) {
          finalURL = finalURL.concat('&singleEvents=true&orderBy=starttime');
      }

      if (settings.timeMin) {
          finalURL = finalURL.concat('&timeMin=' + settings.timeMin);
      };
      
      if (settings.timeMax) {
          finalURL = finalURL.concat('&timeMax=' + settings.timeMax);
      };

      //Get JSON, parse it, transform into list items and append it to past or upcoming events list
      var request = new XMLHttpRequest();
      request.open('GET', finalURL, true);
      
      request.onload = () => {
          if (request.status >= 200 && request.status < 400) {
              var data = JSON.parse(request.responseText);
              renderList(data, settings);
          } else {
              console.error(err);
          }
      };
      
      request.onerror = () => {
          console.error(err);
      };
      
      request.send();
  };

  //Overwrites defaultSettings values with overrideSettings and adds overrideSettings if non existent in defaultSettings
  const mergeOptions = (defaultSettings, overrideSettings) => {
      var newObject = {},
          i;
      for (i in defaultSettings) {
          newObject[i] = defaultSettings[i];
      }
      for (i in overrideSettings) {
          newObject[i] = overrideSettings[i];
      }
      return newObject;
  };

  const isAllDay = (dateStart, dateEnd) => {
      var dateEndTemp = subtractOneDay(dateEnd);
      var isAll = true;
      
      for (var i = 0; i < 3; i++) {
          if (dateStart[i] !== dateEndTemp[i]) {
              isAll = false;
          }
      } 

      return isAll;
  };

  const isSameDay = (dateStart, dateEnd) => {
      var isSame = true;
      for (var i = 0; i < 3; i++) {
          if (dateStart[i] !== dateEnd[i]) {
              isSame = false;
          }
      } 

      return isSame;
  }

  const isPastMidnight = (dateStart, dateEnd) => {
    var dateEndTemp = subtractOneDay(dateEnd);
    var isPastMid = false;
        // console.log(dateStart,dateEnd)

    for (var i = 0; i < 3; i++) {
      if (isAllDay(dateStart,dateEnd) && dateStart[i] === dateEndTemp[i] && dateStart!== 0 && dateStart[3] !== dateEnd[3] && dateEnd[3] < 5){
        isPastMid = true;      
      }
    }
    return isPastMid;
  }

  function pic(summary) {
      if (RegExp(['gym','Gym'].join(`|`)).test(summary)){
      return gymnast
    } else if (RegExp(['bar','Bar','beer', 'Beer', 'drink', 'Drink'].join(`|`)).test(summary)){
      return beer
    } else if (RegExp(['free','Free'].join(`|`)).test(summary)){
      return free
    } else if (RegExp(['jump','Jump'].join(`|`)).test(summary)){
      return jump
    } else {
      return calendar
    }
  }

  //Get all necessary data (dates, location, summary, description) and creates a list item
  const transformationList = (result, tagName, format) => {
      var dateStart = getDateInfo(result.start.dateTime || result.start.date),
          dateEnd = getDateInfo(result.end.dateTime || result.end.date),
          dayNames = config.dayNames,
          moreDaysEvent = true,
          hrClass = '',
          isAllDayEvent = isAllDay(dateStart, dateEnd);

      if (typeof result.end.date !== 'undefined') {
          dateEnd = subtractOneDay(dateEnd);
      }

      if (isSameDay(dateStart, dateEnd)) {
          moreDaysEvent = false;
      }

      if (typeof result.recurringEventId == 'undefined'){
        console.log(result,dateStart,dateEnd,subtractOneDay(dateEnd))
        hrClass = ` class="pinkline"`
      }

      var dateFormatted = getFormattedDate(dateStart, dateEnd, dayNames, moreDaysEvent, isAllDayEvent),
          output = '<' + tagName + '>',
          summary = result.summary || '',
          icon = pic(summary) || '',
          description = result.description || '',
          location = result.location || '',
          i;

      for (i = 0; i < format.length; i++) {
          format[i] = format[i].toString();

          if (format[i] === '*icon*') {
              output = output.concat(icon)
          } else if (format[i] === '*summary*') {
              output = output.concat(`<span class="summary">${summary}</span>`);
          } else if (format[i] === '*date*') {
              output = output.concat(`<span class="date">${dateFormatted}</span>`);
          } else if (format[i] === '*hr*') {
              output = output.concat(`<hr${hrClass}>`);
          } else if (format[i] === '*description*') {
              output = output.concat(`<span class="description">${description}</span>`);
          } else if (format[i] === '*location*') {
              output = output.concat(`<span class="location">${location}</span>`);
          } else {
              if ((format[i + 1] === '*icon*' && icon !== '') ||
                  (format[i + 1] === '*location*' && location !== '') ||
                  (format[i + 1] === '*summary*' && summary !== '') ||
                  (format[i + 1] === '*date*' && dateFormatted !== '') ||
                  (format[i + 1] === '*hr*') ||
                  (format[i + 1] === '*description*' && description !== '')) {

                  output = output.concat(format[i]);
              }
          }
      }

      return output + '</' + tagName + '>';
  };


  //Check if date is later then now
  const isPast = date => {
      var compareDate = new Date(date),
          now = new Date();

      if (now.getTime() > compareDate.getTime()) {
          return true;
      }

      return false;
  };

  //Get temp array with information abou day in followin format: [day number, month number, year, hours, minutes]
  const getDateInfo = date => {
      date = new Date(date);
      return [date.getDate(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes(), 0, 0];
  };

  //Get month name according to index
  const getMonthName = month => {
      var monthNames = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];

      return monthNames[month];
  };

  const getDayName = day => {
    var dayNames = [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    ];

    return dayNames[day];
  };

  const calculateDate = (dateInfo, amount) => {
      var date = getDateFormatted(dateInfo);
      date.setTime(date.getTime() + amount);
      return getDateInfo(date);
  };

  const getDayNameFormatted = dateFormatted => getDayName(getDateFormatted(dateFormatted).getDay()) + ' ';
  
  const getDateFormatted = dateInfo => new Date(dateInfo[2], dateInfo[1], dateInfo[0], dateInfo[3], dateInfo[4] + 0, 0);

  //Compare dates
  const comp = (a, b) => new Date(a.start.dateTime || a.start.date).getTime() - new Date(b.start.dateTime || b.start.date).getTime();  

  //Add one day
  const addOneDay = (dateInfo) => calculateDate(dateInfo, 86400000);
  
  //Subtract one day
  const subtractOneDay = (dateInfo) => calculateDate(dateInfo, -86400000);

  //Subtract one minute
  const subtractOneMinute = (dateInfo) => calculateDate(dateInfo, -60000);


  //Transformations for formatting date into human readable format
  const formatDateSameDay = (dateStart, dateEnd, dayNames, moreDaysEvent, isAllDayEvent) => {
      var formattedTime = '',
          dayNameStart = '';

      if (dayNames) {
        dayNameStart = getDayNameFormatted(dateStart);
      }
      if ((config.sameDayTimes && !moreDaysEvent && !isAllDayEvent) || isPastMidnight(dateStart, dateEnd)) {
          formattedTime = '</span> <span class="time">' + getFormattedTime(dateStart) + ' - ' + getFormattedTime(dateEnd);
      }

      //month day, year time-time
      return dayNameStart + getMonthName(dateStart[1]) + ' ' + dateStart[0] + ', ' + dateStart[2] + formattedTime;
  };

  const formatDateOneDay = (dateStart, dayNames) => {
    var dayName = '';

    if (dayNames) {
      dayName = getDayNameFormatted(dateStart);
    }
    //month day, year
    return dayName + getMonthName(dateStart[1]) + ' ' + dateStart[0] + ', ' + dateStart[2];
  };

  const formatDateDifferentDay = (dateStart, dateEnd, dayNames) => {
    var dayNameStart = '',
        dayNameEnd = '';

    if (dayNames) {
      dayNameStart = getDayNameFormatted(dateStart);
      dayNameEnd = getDayNameFormatted(dateEnd);
    }
      //month day-day, year
      return dayNameStart + getMonthName(dateStart[1]) + ' ' + dateStart[0] + ' - ' + dayNameEnd + dateEnd[0] + ', ' + dateStart[2];
  };

  const formatDateDifferentMonth = (dateStart, dateEnd, dayNames) => {
    var dayNameStart = '',
        dayNameEnd = '';

    if (dayNames) {
      dayNameStart = getDayNameFormatted(dateStart);
      dayNameEnd = getDayNameFormatted(dateEnd);
    }
      //month day - month day, year
      return dayNameStart + getMonthName(dateStart[1]) + ' ' + dateStart[0] + ' - ' + dayNameEnd + getMonthName(dateEnd[1]) + ' ' + dateEnd[0] + ', ' + dateStart[2];
  };

  const formatDateDifferentYear = (dateStart, dateEnd, dayNames) => {
    var dayNameStart = '',
        dayNameEnd = '';

    if (dayNames) {
      dayNameStart = getDayNameFormatted(dateStart);
      dayNameEnd = getDayNameFormatted(dateEnd);
    }
      //month day, year - month day, year
      return dayNameStart + getMonthName(dateStart[1]) + ' ' + dateStart[0] + ', ' + dateStart[2] + ' - ' + dayNameEnd + getMonthName(dateEnd[1]) + ' ' + dateEnd[0] + ', ' + dateEnd[2];
  };

  //Check differences between dates and format them
  const getFormattedDate = (dateStart, dateEnd, dayNames, moreDaysEvent, isAllDayEvent) => {
      var formattedDate = '';

      if (dateStart[0] === dateEnd[0]) {
          if (dateStart[1] === dateEnd[1]) {
              if (dateStart[2] === dateEnd[2]) {
                  //month day, year
                  formattedDate = formatDateSameDay(dateStart, dateEnd, dayNames, moreDaysEvent, isAllDayEvent);
              } else {
                  //month day, year - month day, year
                  formattedDate = formatDateDifferentYear(dateStart, dateEnd, dayNames);
              }
          } else {
              if (dateStart[2] === dateEnd[2]) {
                  //month day - month day, year
                  formattedDate = formatDateDifferentMonth(dateStart, dateEnd, dayNames);
              } else {
                  //month day, year - month day, year
                  formattedDate = formatDateDifferentYear(dateStart, dateEnd, dayNames);
              }
          }
        } else if (isPastMidnight(dateStart,dateEnd) ){
          //month day, year
          // console.log(dateStart,dateEnd);
          formattedDate = formatDateSameDay(dateStart, dateEnd, dayNames, moreDaysEvent, isAllDayEvent);
      } else {
          if (dateStart[1] === dateEnd[1]) {
              if (dateStart[2] === dateEnd[2]) {
                  //month day-day, year
                  formattedDate = formatDateDifferentDay(dateStart, dateEnd, dayNames);
              } else {
                  //month day, year - month day, year
                  formattedDate = formatDateDifferentYear(dateStart, dateEnd, dayNames);
              }
          } else {
              if (dateStart[2] === dateEnd[2]) {
                  //month day - month day, year
                  formattedDate = formatDateDifferentMonth(dateStart, dateEnd, dayNames);
              } else {
                  //month day, year - month day, year
                  formattedDate = formatDateDifferentYear(dateStart, dateEnd, dayNames);
              }
          }
      }

      return formattedDate;
  };

  const getFormattedTime = (date) => {
      var formattedTime = '',
          hour = date[3],
          minute = date[4];

      // Ensure 2-digit minute value.
      minute = (minute < 10 ? '0' : '') + minute;

      // Format time.
      formattedTime = hour + ':' + minute;
      return formattedTime;
  };

  return { 
      init: function (settingsOverride) {
          var settings = {
              calendarUrl: 'https://www.googleapis.com/calendar/v3/calendars/milan.kacurak@gmail.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY',
              past: false,
              upcoming: true,
              sameDayTimes: true,
              dayNames: true,
              pastTopN: -1,
              upcomingTopN: -1,
              recurringEvents: true,
              itemsTagName: 'li',
              upcomingSelector: '#events-upcoming',
              pastSelector: '#events-past',
              upcomingHeading: '<h2>Upcoming events</h2>',
              pastHeading: '<h2>Past events</h2>',
              format: ['*date*', ': ', '*summary*', ' &mdash; ', '*description*', ' in ', '*location*'],
              timeMin: undefined,
              timeMax: undefined
          };

          settings = mergeOptions(settings, settingsOverride);

          init(settings);
      }
  };
})();