// California cities
// source http://www.dot.ca.gov/hq/structur/strmaint/brlog/table_c.htm

var cities = {'ADA'  : {  'fips' : '02462','name' : 'ARCADIA'}
             ,'ADEL' : {  'fips' : '00296','name' : 'ADELANTO'}
             ,'AGRH' : {  'fips' : '00394','name' : 'AGOURA HILLS'}
             ,'ALA'  : {  'fips' : '00562','name' : 'ALAMEDA'}
             ,'ALB'  : {  'fips' : '00674','name' : 'ALBANY'}
             ,'ALH'  : {  'fips' : '00884','name' : 'ALHAMBRA'}
             ,'ALMO' : {  'fips' : '00618','name' : 'ALAMO'}
             ,'ALT'  : {  'fips' : '01444','name' : 'ALTURAS'}
             ,'ALTA' : {  'fips' : '01290','name' : 'ALTADENA'}
             ,'AMA'  : {  'fips' : '01514','name' : 'AMADOR'}
             ,'AMCN' : {  'fips' : '01640','name' : 'AMERICAN CANYON'}
             ,'ANA'  : {  'fips' : '02000','name' : 'ANAHEIM'}
             ,'AND'  : {  'fips' : '02042','name' : 'ANDERSON'}
             ,'ANDP' : {  'fips' : '01150','name' : 'ALONDRA PARK'}
             ,'ANG'  : {  'fips' : '02112','name' : 'ANGELS'}
             ,'ANT'  : {  'fips' : '02252','name' : 'ANTIOCH'}
             ,'APLV' : {  'fips' : '02364','name' : 'APPLE VALLEY'}
             ,'ARC'  : {  'fips' : '02476','name' : 'ARCATA'}
             ,'ARDN' : {  'fips' : '02553','name' : 'ARDEN-ARCADE'}
             ,'ARGD' : {  'fips' : '02868','name' : 'ARROYO GRANDE'}
             ,'ART'  : {  'fips' : '02896','name' : 'ARTESIA'}
             ,'ARV'  : {  'fips' : '02924','name' : 'ARVIN'}
             ,'ASHD' : {  'fips' : '02980','name' : 'ASHLAND'}
             ,'ATAS' : {  'fips' : '03064','name' : 'ATASCADERO'}
             ,'ATN'  : {  'fips' : '03092','name' : 'ATHERTON'}
             ,'ATW'  : {  'fips' : '03162','name' : 'ATWATER'}
             ,'AUB'  : {  'fips' : '03204','name' : 'AUBURN'}
             ,'AVA'  : {  'fips' : '03274','name' : 'AVALON'}
             ,'AVDH' : {  'fips' : '03344','name' : 'AVOCADO HEIGHTS'}
             ,'AVNL' : {  'fips' : '03302','name' : 'AVENAL'}
             ,'AZU'  : {  'fips' : '03386','name' : 'AZUSA'}
             ,'BAN'  : {  'fips' : '03820','name' : 'BANNING'}
             ,'BAU'  : {  'fips' : '04758','name' : 'BEAUMONT'}
             ,'BBL'  : {  'fips' : '06392','name' : 'BIG BEAR LAKE'}
             ,'BBY'  : {  'fips' : '07946','name' : 'BRADBURY'}
             ,'BELL' : {  'fips' : '04870','name' : 'BELL'}
             ,'BEN'  : {  'fips' : '05290','name' : 'BENICIA'}
             ,'BER'  : {  'fips' : '06000','name' : 'BERKELEY'}
             ,'BFL'  : {  'fips' : '04982','name' : 'BELLFLOWER'}
             ,'BGDN' : {  'fips' : '04996','name' : 'BELL GARDENS'}
             ,'BIA'  : {  'fips' : 'BIA',  'name' : '*BUREAU OF INDIAN AFFAIRS'}
             ,'BIG'  : {  'fips' : '06560','name' : 'BIGGS'}
             ,'BIS'  : {  'fips' : '06798','name' : 'BISHOP'}
             ,'BKD'  : {  'fips' : '03526','name' : 'BAKERSFIELD'}
             ,'BLK'  : {  'fips' : '07162','name' : 'BLUE LAKE'}
             ,'BLTN' : {  'fips' : '08758','name' : 'BUELLTON'}
             ,'BLV'  : {  'fips' : '05164','name' : 'BELVEDERE'}
             ,'BLY'  : {  'fips' : '07218','name' : 'BLYTHE'}
             ,'BMT'  : {  'fips' : '05108','name' : 'BELMONT'}
             ,'BMTN' : {  'fips' : '07064','name' : 'BLOOMINGTON'}
             ,'BONT' : {  'fips' : '07414','name' : 'BONITA'}
             ,'BOST' : {  'fips' : '07624','name' : 'BOSTONIA'}
             ,'BPK'  : {  'fips' : '08786','name' : 'BUENA PARK'}
             ,'BRB'  : {  'fips' : '08954','name' : 'BURBANK'}
             ,'BRE'  : {  'fips' : '08100','name' : 'BREA'}
             ,'BRW'  : {  'fips' : '08058','name' : 'BRAWLEY'}
             ,'BSBN' : {  'fips' : '08310','name' : 'BRISBANE'}
             ,'BSW'  : {  'fips' : '04030','name' : 'BARSTOW'}
             ,'BTWD' : {  'fips' : '08142','name' : 'BRENTWOOD'}
             ,'BURE' : {  'fips' : 'BURE', 'name' : '*BUREAU OF RECLAMATION'}
             ,'BURL' : {  'fips' : '09066','name' : 'BURLINGAME'}
             ,'BVHS' : {  'fips' : '06308','name' : 'BEVERLY HILLS'}
             ,'BWP'  : {  'fips' : '03666','name' : 'BALDWIN PARK'}
             ,'BYWD' : {  'fips' : '04541','name' : 'BAYWOOD-LOS OSOS'}
             ,'CADE' : {  'fips' : '11691','name' : 'CASA DE ORO-MOUNT HELIX'}
             ,'CAEL' : {  'fips' : '11390','name' : 'CARMICHAEL'}
             ,'CAL'  : {  'fips' : '90310','name' : 'CALABASAS'}
             ,'CALC' : {  'fips' : '09780','name' : 'CALIFORNIA CITY'}
             ,'CAMA' : {  'fips' : '10564','name' : 'CAMP PENDLETON SOUTH'}
             ,'CAMN' : {  'fips' : '10559','name' : 'CAMP PENDLETON NORTH'}
             ,'CAPA' : {  'fips' : '10256','name' : 'CAMERON PARK'}
             ,'CARP' : {  'fips' : '11446','name' : 'CARPINTERIA'}
             ,'CAVA' : {  'fips' : '11964','name' : 'CASTRO VALLEY'}
             ,'CBD'  : {  'fips' : '11194','name' : 'CARLSBAD'}
             ,'CDHY' : {  'fips' : '17498','name' : 'CUDAHY'}
             ,'CER'  : {  'fips' : '12524','name' : 'CERES'}
             ,'CFX'  : {  'fips' : '14498','name' : 'COLFAX'}
             ,'CHC'  : {  'fips' : '13014','name' : 'CHICO'}
             ,'CHLD' : {  'fips' : '12902','name' : 'CHERRYLAND'}
             ,'CHN'  : {  'fips' : '13210','name' : 'CHINO'}
             ,'CHNH' : {  'fips' : '13214','name' : 'CHINO HILLS'}
             ,'CHTS' : {  'fips' : '13588','name' : 'CITRUS HEIGHTS'}
             ,'CHV'  : {  'fips' : '13392','name' : 'CHULA VISTA'}
             ,'CHW'  : {  'fips' : '13294','name' : 'CHOWCHILLA'}
             ,'CLA'  : {  'fips' : '13756','name' : 'CLAREMONT'}
             ,'CLC'  : {  'fips' : '17568','name' : 'CULVER CITY'}
             ,'CLLK' : {  'fips' : '13945','name' : 'CLEARLAKE'}
             ,'CLM'  : {  'fips' : '14736','name' : 'COLMA'}
             ,'CLNG' : {  'fips' : '14274','name' : 'COALINGA'}
             ,'CLO'  : {  'fips' : '14218','name' : 'CLOVIS'}
             ,'CLP'  : {  'fips' : '09878','name' : 'CALIPATRIA'}
             ,'CLU'  : {  'fips' : '14946','name' : 'COLUSA'}
             ,'CLVD' : {  'fips' : '14190','name' : 'CLOVERDALE'}
             ,'CLX'  : {  'fips' : '09710','name' : 'CALEXICO'}
             ,'CMAD' : {  'fips' : '16462','name' : 'CORTE MADERA'}
             ,'CMB'  : {  'fips' : '10340','name' : 'CAMPBELL'}
             ,'CML'  : {  'fips' : '11250','name' : 'CARMEL-BY-THE-SEA'}
             ,'CMRC' : {  'fips' : '14974','name' : 'COMMERCE'}
             ,'CMRL' : {  'fips' : '10046','name' : 'CAMARILLO'}
             ,'CMS'  : {  'fips' : '16532','name' : 'COSTA MESA'}
             ,'CMSA' : {  'fips' : '09864','name' : 'CALIMESA'}
             ,'CND'  : {  'fips' : '16000','name' : 'CONCORD'}
             ,'CNG'  : {  'fips' : '16322','name' : 'CORNING'}
             ,'CNLK' : {  'fips' : '10928','name' : 'CANYON LAKE'}
             ,'COA'  : {  'fips' : '14260','name' : 'COACHELLA'}
             ,'COL'  : {  'fips' : '14890','name' : 'COLTON'}
             ,'COM'  : {  'fips' : '15044','name' : 'COMPTON'}
             ,'COR'  : {  'fips' : '16350','name' : 'CORONA'}
             ,'CORD' : {  'fips' : '16378','name' : 'CORONADO'}
             ,'COTI' : {  'fips' : '16560','name' : 'COTATI'}
             ,'COV'  : {  'fips' : '16742','name' : 'COVINA'}
             ,'CPO'  : {  'fips' : '17610','name' : 'CUPERTINO'}
             ,'CPTL' : {  'fips' : '11040','name' : 'CAPITOLA'}
             ,'CRC'  : {  'fips' : '17022','name' : 'CRESCENT CITY'}
             ,'CRCN' : {  'fips' : '16224','name' : 'CORCORAN'}
             ,'CRSN' : {  'fips' : '11530','name' : 'CARSON'}
             ,'CRTS' : {  'fips' : '12552','name' : 'CERRITOS'}
             ,'CSTG' : {  'fips' : '09892','name' : 'CALISTOGA'}
             ,'CTHC' : {  'fips' : '12048','name' : 'CATHEDRAL CITY'}
             ,'CYP'  : {  'fips' : '17750','name' : 'CYPRESS'}
             ,'CYTN' : {  'fips' : '13882','name' : 'CLAYTON'}
             ,'DAPT' : {  'fips' : '17946','name' : 'DANA POINT'}
             ,'DBA'  : {  'fips' : '19318','name' : 'DINUBA'}
             ,'DBLN' : {  'fips' : '20018','name' : 'DUBLIN'}
             ,'DHSP' : {  'fips' : '18996','name' : 'DESERT HOT SPRINGS'}
             ,'DLC'  : {  'fips' : '17918','name' : 'DALY CITY'}
             ,'DLMR' : {  'fips' : '18506','name' : 'DEL MAR'}
             ,'DLN'  : {  'fips' : '18394','name' : 'DELANO'}
             ,'DMBR' : {  'fips' : '19192','name' : 'DIAMOND BAR'}
             ,'DMR'  : {  'fips' : '20242','name' : 'DUNSMUIR'}
             ,'DNVL' : {  'fips' : '17988','name' : 'DANVILLE'}
             ,'DNY'  : {  'fips' : '19766','name' : 'DOWNEY'}
             ,'DPLS' : {  'fips' : '19612','name' : 'DOS PALOS'}
             ,'DRO'  : {  'fips' : '18688','name' : 'DEL REY OAKS'}
             ,'DRS'  : {  'fips' : '19584','name' : 'DORRIS'}
             ,'DRT'  : {  'fips' : '19990','name' : 'DUARTE'}
             ,'DVS'  : {  'fips' : '18100','name' : 'DAVIS'}
             ,'DXN'  : {  'fips' : '19402','name' : 'DIXON'}
             ,'EAFH' : {  'fips' : '20598','name' : 'EAST FOOTHILLS'}
             ,'EAHE' : {  'fips' : '20697','name' : 'EAST HEMET'}
             ,'EALA' : {  'fips' : '20802','name' : 'EAST LOS ANGELES'}
             ,'EAPA' : {  'fips' : '20956','name' : 'EAST PALO ALTO'}
             ,'EASA' : {  'fips' : '21096','name' : 'EAST SAN GABRIEL'}
             ,'ECJ'  : {  'fips' : '21712','name' : 'EL CAJON'}
             ,'ECN'  : {  'fips' : '21782','name' : 'EL CENTRO'}
             ,'ECR'  : {  'fips' : '21796','name' : 'EL CERRITO'}
             ,'ELKG' : {  'fips' : '22020','name' : 'ELK GROVE'}
             ,'ELTO' : {  'fips' : '22468','name' : 'EL TORO'}
             ,'EMTE' : {  'fips' : '22230','name' : 'EL MONTE'}
             ,'EMV'  : {  'fips' : '22594','name' : 'EMERYVILLE'}
             ,'ENTS' : {  'fips' : '22678','name' : 'ENCINITAS'}
             ,'EPAO' : {  'fips' : '20970','name' : 'EAST PALO ALTO'}
             ,'ESD'  : {  'fips' : '22804','name' : 'ESCONDIDO'}
             ,'ESEG' : {  'fips' : '22412','name' : 'EL SEGUNDO'}
             ,'ESL'  : {  'fips' : '22790','name' : 'ESCALON'}
             ,'ESN'  : {  'fips' : '39486','name' : 'LAKE ELSINORE'}
             ,'ETN'  : {  'fips' : '22972','name' : 'ETNA'}
             ,'EUR'  : {  'fips' : '23042','name' : 'EUREKA'}
             ,'EXR'  : {  'fips' : '23126','name' : 'EXETER'}
             ,'FABK' : {  'fips' : '23462','name' : 'FALLBROOK'}
             ,'FAOK' : {  'fips' : '23294','name' : 'FAIR OAKS'}
             ,'FBG'  : {  'fips' : '25058','name' : 'FORT BRAGG'}
             ,'FER'  : {  'fips' : '23910','name' : 'FERNDALE'}
             ,'FIL'  : {  'fips' : '24092','name' : 'FILLMORE'}
             ,'FIR'  : {  'fips' : '24134','name' : 'FIREBAUGH'}
             ,'FJN'  : {  'fips' : '25128','name' : 'FORT JONES'}
             ,'FLGR' : {  'fips' : '24477','name' : 'FLORENCE-GRAHAM'}
             ,'FLIN' : {  'fips' : '24498','name' : 'FLORIN'}
             ,'FMT'  : {  'fips' : '26000','name' : 'FREMONT'}
             ,'FMVL' : {  'fips' : '23616','name' : 'FARMERSVILLE'}
             ,'FNA'  : {  'fips' : '24680','name' : 'FONTANA'}
             ,'FNV'  : {  'fips' : '25380','name' : 'FOUNTAIN VALLEY'}
             ,'FOFA' : {  'fips' : '24722','name' : 'FOOTHILL FARMS'}
             ,'FOL'  : {  'fips' : '24638','name' : 'FOLSOM'}
             ,'FOW'  : {  'fips' : '25436','name' : 'FOWLER'}
             ,'FRE'  : {  'fips' : '27000','name' : 'FRESNO'}
             ,'FRFD' : {  'fips' : '23182','name' : 'FAIRFIELD'}
             ,'FRFX' : {  'fips' : '23168','name' : 'FAIRFAX'}
             ,'FSTC' : {  'fips' : '25338','name' : 'FOSTER CITY'}
             ,'FTA'  : {  'fips' : '25296','name' : 'FORTUNA'}
             ,'FUL'  : {  'fips' : '28000','name' : 'FULLERTON'}
             ,'GAL'  : {  'fips' : '28112','name' : 'GALT'}
             ,'GAR'  : {  'fips' : '28168','name' : 'GARDENA'}
             ,'GDLP' : {  'fips' : '31414','name' : 'GUADALUPE'}
             ,'GDR'  : {  'fips' : '30014','name' : 'GLENDORA'}
             ,'GGR'  : {  'fips' : '29000','name' : 'GARDEN GROVE'}
             ,'GIL'  : {  'fips' : '29504','name' : 'GILROY'}
             ,'GLAV' : {  'fips' : '29644','name' : 'GLEN AVON'}
             ,'GLTA' : {  'fips' : '05481','name' : 'GOLETA'}
             ,'GNDL' : {  'fips' : '30000','name' : 'GLENDALE'}
             ,'GNFD' : {  'fips' : '30994','name' : 'GREENFIELD'}
             ,'GNZ'  : {  'fips' : '30392','name' : 'GONZALES'}
             ,'GRC'  : {  'fips' : '31400','name' : 'GROVER BEACH'}
             ,'GRD'  : {  'fips' : '31260','name' : 'GRIDLEY'}
             ,'GRTR' : {  'fips' : '30658','name' : 'GRAND TERRACE'}
             ,'GUS'  : {  'fips' : '31568','name' : 'GUSTINE CITY'}
             ,'GVY'  : {  'fips' : '30798','name' : 'GRASS VALLEY'}
             ,'HAHE' : {  'fips' : '31596','name' : 'HACIENDA HEIGHTS'}
             ,'HAN'  : {  'fips' : '31960','name' : 'HANFORD'}
             ,'HAW'  : {  'fips' : '32548','name' : 'HAWTHORNE'}
             ,'HAY'  : {  'fips' : '33000','name' : 'HAYWARD'}
             ,'HEM'  : {  'fips' : '33182','name' : 'HEMET'}
             ,'HER'  : {  'fips' : '33308','name' : 'HERCULES'}
             ,'HES'  : {  'fips' : '33434','name' : 'HESPERIA'}
             ,'HGDN' : {  'fips' : '32506','name' : 'HAWAIIAN GARDENS'}
             ,'HIDH' : {  'fips' : '33518','name' : 'HIDDEN HILL'}
             ,'HIGH' : {  'fips' : '33588','name' : 'HIGHLAND'}
             ,'HIL'  : {  'fips' : '33798','name' : 'HILLSBOROUGH'}
             ,'HLBG' : {  'fips' : '33056','name' : 'HEALDSBURG'}
             ,'HMB'  : {  'fips' : '33364','name' : 'HERMOSA BEACH'}
             ,'HMBY' : {  'fips' : '31708','name' : 'HALF MOON BAY'}
             ,'HNTB' : {  'fips' : '36000','name' : 'HUNTINGTON BEACH'}
             ,'HNTP' : {  'fips' : '36056','name' : 'HUNTINGTON PARK'}
             ,'HOLT' : {  'fips' : '34246','name' : 'HOLTVILLE'}
             ,'HRN'  : {  'fips' : '36084','name' : 'HURON'}
             ,'HST'  : {  'fips' : '34120','name' : 'HOLLISTER'}
             ,'HUSN' : {  'fips' : '34904','name' : 'HUGHSON'}
             ,'IDY'  : {  'fips' : '36490','name' : 'INDUSTRY'}
             ,'IMB'  : {  'fips' : '36294','name' : 'IMPERIAL BEACH'}
             ,'IMP'  : {  'fips' : '36280','name' : 'IMPERIAL'}
             ,'IND'  : {  'fips' : '36448','name' : 'INDIO'}
             ,'INDW' : {  'fips' : '36434','name' : 'INDIAN WELLS'}
             ,'ING'  : {  'fips' : '36546','name' : 'INGLEWOOD'}
             ,'ION'  : {  'fips' : '36672','name' : 'IONE'}
             ,'IRVN' : {  'fips' : '36770','name' : 'IRVINE'}
             ,'IRW'  : {  'fips' : '36826','name' : 'IRWINDALE'}
             ,'IST'  : {  'fips' : '36882','name' : 'ISLETON'}
             ,'ISVA' : {  'fips' : '36868','name' : 'ISLA VISTA'}
             ,'JKN'  : {  'fips' : '36980','name' : 'JACKSON'}
             ,'KMN'  : {  'fips' : '38226','name' : 'KERMAN'}
             ,'KNC'  : {  'fips' : '38520','name' : 'KING CITY'}
             ,'KNGB' : {  'fips' : '38562','name' : 'KINGSBURG'}
             ,'LA'   : {  'fips' : '44000','name' : 'LOS ANGELES'}
             ,'LAH'  : {  'fips' : '43294','name' : 'LOS ALTOS HILLS'}
             ,'LALM' : {  'fips' : '43224','name' : 'LOS ALAMITOS'}
             ,'LAMT' : {  'fips' : '40088','name' : 'LAMONT'}
             ,'LAN'  : {  'fips' : '40130','name' : 'LANCASTER'}
             ,'LARI' : {  'fips' : '40410','name' : 'LA RIVIERA'}
             ,'LASI' : {  'fips' : '39766','name' : 'LAKESIDE'}
             ,'LATS' : {  'fips' : '43280','name' : 'LOS ALTOS'}
             ,'LBCH' : {  'fips' : '43000','name' : 'LONG BEACH'}
             ,'LBNS' : {  'fips' : '44028','name' : 'LOS BANOS'}
             ,'LCF'  : {  'fips' : '39003','name' : 'LA CANADA-FLINTRIDGE'}
             ,'LCMR' : {  'fips' : '39045','name' : 'LA CRESCENTA-MONTROSE'}
             ,'LEM'  : {  'fips' : '41152','name' : 'LEMOORE'}
             ,'LENX' : {  'fips' : '41180','name' : 'LENNOX'}
             ,'LFYT' : {  'fips' : '39122','name' : 'LAFAYETTE'}
             ,'LGNB' : {  'fips' : '39178','name' : 'LAGUNA BEACH'}
             ,'LGNG' : {  'fips' : '39248','name' : 'LAGUNA NIGUEL'}
             ,'LGNH' : {  'fips' : '39220','name' : 'LAGUNA HILLS'}
             ,'LGTS' : {  'fips' : '44112','name' : 'LOS GATOS'}
             ,'LHB'  : {  'fips' : '39290','name' : 'LA HABRA'}
             ,'LHHS' : {  'fips' : '39304','name' : 'LA HABRA HEIGHTS'}
             ,'LIDA' : {  'fips' : '41572','name' : 'LINDA'}
             ,'LIO'  : {  'fips' : '41936','name' : 'LIVE OAK'}
             ,'LIOK' : {  'fips' : '41922','name' : 'LIVE OAK'}
             ,'LKFR' : {  'fips' : '39496','name' : 'LAKE FOREST'}
             ,'LKPT' : {  'fips' : '39710','name' : 'LAKEPORT'}
             ,'LKSP' : {  'fips' : '40438','name' : 'LARKSPUR'}
             ,'LKW'  : {  'fips' : '39892','name' : 'LAKEWOOD'}
             ,'LMGR' : {  'fips' : '41124','name' : 'LEMON GROVE'}
             ,'LMLN' : {  'fips' : '42370','name' : 'LOMA LINDA'}
             ,'LMRD' : {  'fips' : '40032','name' : 'LA MIRADA'}
             ,'LMS'  : {  'fips' : '43140','name' : 'LOOMIS'}
             ,'LMSA' : {  'fips' : '40004','name' : 'LA MESA'}
             ,'LMTA' : {  'fips' : '42468','name' : 'LOMITA'}
             ,'LNCN' : {  'fips' : '41474','name' : 'LINCOLN'}
             ,'LNDL' : {  'fips' : '40886','name' : 'LAWNDALE'}
             ,'LNSY' : {  'fips' : '41712','name' : 'LINDSAY'}
             ,'LOD'  : {  'fips' : '42202','name' : 'LODI'}
             ,'LOM'  : {  'fips' : '42524','name' : 'LOMPOC'}
             ,'LOY'  : {  'fips' : '44364','name' : 'LOYALTON'}
             ,'LPMA' : {  'fips' : '40256','name' : 'LA PALMA'}
             ,'LPU'  : {  'fips' : '40340','name' : 'LA PUENTE'}
             ,'LQNT' : {  'fips' : '40354','name' : 'LA QUINTA'}
             ,'LTRP' : {  'fips' : '40704','name' : 'LATHROP'}
             ,'LVMR' : {  'fips' : '41992','name' : 'LIVERMORE'}
             ,'LVN'  : {  'fips' : '40830','name' : 'LA VERNE'}
             ,'LVTN' : {  'fips' : '42006','name' : 'LIVINGSTON'}
             ,'LYN'  : {  'fips' : '44574','name' : 'LYNWOOD'}
             ,'MAD'  : {  'fips' : '45022','name' : 'MADERA'}
             ,'MAL'  : {  'fips' : '45246','name' : 'MALIBU'}
             ,'MANB' : {  'fips' : '45400','name' : 'MANHATTAN BEACH'}
             ,'MCF'  : {  'fips' : '44826','name' : 'MC FARLAND'}
             ,'MCL'  : {  'fips' : '48788','name' : 'MONTCLAIR'}
             ,'MCP'  : {  'fips' : '45736','name' : 'MARICOPA'}
             ,'MDA'  : {  'fips' : '46828','name' : 'MENDOTA'}
             ,'MER'  : {  'fips' : '46898','name' : 'MERCED'}
             ,'MGH'  : {  'fips' : '49278','name' : 'MORGAN HILL'}
             ,'MILO' : {  'fips' : '47976','name' : 'MIRA LOMA'}
             ,'MKVL' : {  'fips' : '44910','name' : 'MCKINLEYVILLE'}
             ,'MLBR' : {  'fips' : '47486','name' : 'MILLBRAE'}
             ,'MLP'  : {  'fips' : '46870','name' : 'MENLO PARK'}
             ,'MLV'  : {  'fips' : '47710','name' : 'MILL VALLEY'}
             ,'MMLK' : {  'fips' : '45358','name' : 'MAMMOTH LAKES'}
             ,'MNRO' : {  'fips' : '48648','name' : 'MONROVIA'}
             ,'MNTG' : {  'fips' : '48690','name' : 'MONTAGUE'}
             ,'MOBY' : {  'fips' : '49362','name' : 'MORRO BAY'}
             ,'MOD'  : {  'fips' : '48354','name' : 'MODESTO'}
             ,'MON'  : {  'fips' : '48872','name' : 'MONTEREY'}
             ,'MONP' : {  'fips' : '48914','name' : 'MONTEREY PARK'}
             ,'MORV' : {  'fips' : '49270','name' : 'MORENO VALLEY'}
             ,'MPS'  : {  'fips' : '47766','name' : 'MILPITAS'}
             ,'MRGA' : {  'fips' : '49194','name' : 'MORAGA'}
             ,'MRNA' : {  'fips' : '45778','name' : 'MARINA'}
             ,'MRPK' : {  'fips' : '49138','name' : 'MOORPARK'}
             ,'MRTA' : {  'fips' : '50076','name' : 'MURRIETA'}
             ,'MSHA' : {  'fips' : '49852','name' : 'MOUNT SHASTA'}
             ,'MSNV' : {  'fips' : '48256','name' : 'MISSION VIEJO'}
             ,'MSO'  : {  'fips' : '48956','name' : 'MONTE SERENO'}
             ,'MTBL' : {  'fips' : '48816','name' : 'MONTEBELLO'}
             ,'MTCA' : {  'fips' : '45484','name' : 'MANTECA'}
             ,'MTZ'  : {  'fips' : '46114','name' : 'MARTINEZ'}
             ,'MVL'  : {  'fips' : '46170','name' : 'MARYSVILLE'}
             ,'MVW'  : {  'fips' : '49670','name' : 'MOUNTAIN VIEW'}
             ,'MYD'  : {  'fips' : '46492','name' : 'MAYWOOD'}
             ,'NAP'  : {  'fips' : '50258','name' : 'NAPA'}
             ,'NATC' : {  'fips' : '50398','name' : 'NATIONAL CITY'}
             ,'NED'  : {  'fips' : '50734','name' : 'NEEDLES'}
             ,'NEVC' : {  'fips' : '50874','name' : 'NEVADA CITY'}
             ,'NEWM' : {  'fips' : '51140','name' : 'NEWMAN'}
             ,'NMON' : {  'fips' : 'NMON', 'name' : '*NATIONAL MONUMENT'}
             ,'NOAU' : {  'fips' : '51637','name' : 'NORTH AUBURN'}
             ,'NOHI' : {  'fips' : '51924','name' : 'NORTH HIGHLANDS'}
             ,'NPTB' : {  'fips' : '51182','name' : 'NEWPORT BEACH'}
             ,'NRA'  : {  'fips' : 'NRA',   'name' :'*NATIONAL RECREATION AREA'}
             ,'NRCO' : {  'fips' : '51560','name' : 'NORCO'}
             ,'NRW'  : {  'fips' : '52526','name' : 'NORWALK'}
             ,'NTPK' : {  'fips' : 'NTPK',  'name' :'*NATIONAL PARK'}
             ,'NVTO' : {  'fips' : '52582','name' : 'NOVATO'}
             ,'NWK'  : {  'fips' : '50916','name' : 'NEWARK'}
             ,'OAK'  : {  'fips' : '53000','name' : 'OAKLAND'}
             ,'OCN'  : {  'fips' : '53322','name' : 'OCEANSIDE'}
             ,'OJI'  : {  'fips' : '53476','name' : 'OJAI'}
             ,'OKDL' : {  'fips' : '52694','name' : 'OAKDALE'}
             ,'OKLY' : {  'fips' : '53070','name' : 'OAKLEY'}
             ,'OLDL' : {  'fips' : '53448','name' : 'OILDALE'}
             ,'ONT'  : {  'fips' : '53896','name' : 'ONTARIO'}
             ,'ORA'  : {  'fips' : '53980','name' : 'ORANGE'}
             ,'ORCV' : {  'fips' : '54008','name' : 'ORANGE COVE'}
             ,'ORIN' : {  'fips' : '54232','name' : 'ORINDA'}
             ,'ORL'  : {  'fips' : '54274','name' : 'ORLAND'}
             ,'ORVL' : {  'fips' : '54092','name' : 'ORANGEVALE'}
             ,'OVL'  : {  'fips' : '54386','name' : 'OROVILLE'}
             ,'OXN'  : {  'fips' : '54652','name' : 'OXNARD'}
             ,'PA'   : {  'fips' : '55282','name' : 'PALO ALTO'}
             ,'PAR'  : {  'fips' : '55856','name' : 'PARLIER'}
             ,'PAS'  : {  'fips' : '56000','name' : 'PASADENA'}
             ,'PAT'  : {  'fips' : '56112','name' : 'PATTERSON'}
             ,'PBCH' : {  'fips' : '57414','name' : 'PISMO BEACH'}
             ,'PDMT' : {  'fips' : '56938','name' : 'PIEDMONT'}
             ,'PDST' : {  'fips' : '55184','name' : 'PALM DESERT'}
             ,'PER'  : {  'fips' : '56700','name' : 'PERRIS'}
             ,'PET'  : {  'fips' : '56784','name' : 'PETALUMA'}
             ,'PFA'  : {  'fips' : '54806','name' : 'PACIFICA'}
             ,'PGR'  : {  'fips' : '54848','name' : 'PACIFIC GROVE'}
             ,'PHME' : {  'fips' : '58296','name' : 'PORT HUENEME'}
             ,'PIN'  : {  'fips' : '57288','name' : 'PINOLE'}
             ,'PIT'  : {  'fips' : '57456','name' : 'PITTSBURG'}
             ,'PKSH' : {  'fips' : '55837','name' : 'PARKWAY-SOUTH SACRAMENTO'}
             ,'PLCN' : {  'fips' : '57526','name' : 'PLACENTIA'}
             ,'PLCR' : {  'fips' : '57540','name' : 'PLACERVILLE'}
             ,'PLE'  : {  'fips' : '57792','name' : 'PLEASANTON'}
             ,'PLHL' : {  'fips' : '57764','name' : 'PLEASANT HILL'}
             ,'PLY'  : {  'fips' : '57834','name' : 'PLYMOUTH'}
             ,'PMDL' : {  'fips' : '55156','name' : 'PALMDALE'}
             ,'POM'  : {  'fips' : '58072','name' : 'POMONA'}
             ,'PRDS' : {  'fips' : '55520','name' : 'PARADISE'}
             ,'PRM'  : {  'fips' : '55618','name' : 'PARAMOUNT'}
             ,'PRTL' : {  'fips' : '58352','name' : 'PORTOLA'}
             ,'PRV'  : {  'fips' : '56924','name' : 'PICO RIVERA'}
             ,'PSP'  : {  'fips' : '55254','name' : 'PALM SPRINGS'}
             ,'PSRS' : {  'fips' : '22300','name' : 'EL PASO DE ROBLES'}
             ,'PTA'  : {  'fips' : '57876','name' : 'POINT ARENA'}
             ,'PTLV' : {  'fips' : '58380','name' : 'PORTOLA VALLEY'}
             ,'PTRV' : {  'fips' : '58240','name' : 'PORTERVILLE'}
             ,'PVE'  : {  'fips' : '55380','name' : 'PALOS VERDES ESTATES'}
             ,'PWY'  : {  'fips' : '58520','name' : 'POWAY'}
             ,'RACO' : {  'fips' : '59444','name' : 'RANCHO CORDOVA'}
             ,'RAMO' : {  'fips' : '59346','name' : 'RAMONA'}
             ,'RBL'  : {  'fips' : '59892','name' : 'RED BLUFF'}
             ,'RCH'  : {  'fips' : '60620','name' : 'RICHMOND'}
             ,'RCUC' : {  'fips' : '59451','name' : 'RANCHO CUCAMONGA'}
             ,'RDEL' : {  'fips' : '60900','name' : 'RIO DELL'}
             ,'RDG'  : {  'fips' : '59920','name' : 'REDDING'}
             ,'RDL'  : {  'fips' : '59962','name' : 'REDLANDS'}
             ,'RDOB' : {  'fips' : '60018','name' : 'REDONDO BEACH'}
             ,'RDWC' : {  'fips' : '60102','name' : 'REDWOOD CITY'}
             ,'REED' : {  'fips' : '60242','name' : 'REEDLEY'}
             ,'RGCR' : {  'fips' : '60704','name' : 'RIDGECREST'}
             ,'RHE'  : {  'fips' : '62644','name' : 'ROLLING HILLS ESTATES'}
             ,'RIA'  : {  'fips' : '60466','name' : 'RIALTO'}
             ,'RIP'  : {  'fips' : '61026','name' : 'RIPON'}
             ,'RIV'  : {  'fips' : '62000','name' : 'RIVERSIDE'}
             ,'RLH'  : {  'fips' : '62602','name' : 'ROLLING HILLS'}
             ,'RMIR' : {  'fips' : '59500','name' : 'RANCHO MIRAGE'}
             ,'RNPK' : {  'fips' : '62546','name' : 'ROHNERT PARK'}
             ,'ROC'  : {  'fips' : '62364','name' : 'ROCKLIN'}
             ,'ROHE' : {  'fips' : '63218','name' : 'ROWLAND HEIGHTS'}
             ,'ROPV' : {  'fips' : '59514','name' : 'RANCHO PALOS VERDES'}
             ,'ROS'  : {  'fips' : '62980','name' : 'ROSS'}
             ,'RSM'  : {  'fips' : '59587','name' : 'Rancho Santa Margarita'}
             ,'RSMD' : {  'fips' : '62896','name' : 'ROSEMEAD'}
             ,'RSMT' : {  'fips' : '62910','name' : 'ROSEMONT'}
             ,'RSV'  : {  'fips' : '62938','name' : 'ROSEVILLE'}
             ,'RUDX' : {  'fips' : '63260','name' : 'RUBIDOUX'}
             ,'RVBK' : {  'fips' : '61068','name' : 'RIVERBANK'}
             ,'RVS'  : {  'fips' : '60984','name' : 'RIO VISTA'}
             ,'SA'   : {  'fips' : '69000','name' : 'SANTA ANA'}
             ,'SAC'  : {  'fips' : '64000','name' : 'SACRAMENTO'}
             ,'SAL'  : {  'fips' : '64224','name' : 'SALINAS'}
             ,'SALR' : {  'fips' : '68112','name' : 'SAN LORENZO'}
             ,'SAR'  : {  'fips' : '70280','name' : 'SARATOGA'}
             ,'SAUS' : {  'fips' : '70364','name' : 'SAUSALITO'}
             ,'SB'   : {  'fips' : '69070','name' : 'SANTA BARBARA'}
             ,'SBD'  : {  'fips' : '65000','name' : 'SAN BERNARDINO'}
             ,'SBR'  : {  'fips' : '65028','name' : 'SAN BRUNO'}
             ,'SCAR' : {  'fips' : '65070','name' : 'SAN CARLOS'}
             ,'SCL'  : {  'fips' : '69084','name' : 'SANTA CLARA'}
             ,'SCLE' : {  'fips' : '65084','name' : 'SAN CLEMENTE'}
             ,'SCR'  : {  'fips' : '69112','name' : 'SANTA CRUZ'}
             ,'SCTA' : {  'fips' : '69088','name' : 'SANTA CLARITA'}
             ,'SCTV' : {  'fips' : '70588','name' : 'SCOTTS VALLEY'}
             ,'SD'   : {  'fips' : '66000','name' : 'SAN DIEGO'}
             ,'SDMS' : {  'fips' : '66070','name' : 'SAN DIMAS'}
             ,'SEA'  : {  'fips' : '70742','name' : 'SEASIDE'}
             ,'SEB'  : {  'fips' : '70770','name' : 'SEBASTOPOL'}
             ,'SEL'  : {  'fips' : '70882','name' : 'SELMA'}
             ,'SEMT' : {  'fips' : '72996','name' : 'SOUTH EL MONTE'}
             ,'SF'   : {  'fips' : '67000','name' : 'SAN FRANCISCO'}
             ,'SFR'  : {  'fips' : '66140','name' : 'SAN FERNANDO'}
             ,'SFSP' : {  'fips' : '69154','name' : 'SANTA FE SPRINGS'}
             ,'SGB'  : {  'fips' : '67042','name' : 'SAN GABRIEL'}
             ,'SGR'  : {  'fips' : '67056','name' : 'SANGER'}
             ,'SGT'  : {  'fips' : '73080','name' : 'SOUTH GATE'}
             ,'SHF'  : {  'fips' : '71106','name' : 'SHAFTER'}
             ,'SHLA' : {  'fips' : '64140','name' : 'SAINT HELENA'}
             ,'SHLK' : {  'fips' : '71225','name' : 'SHASTA LAKE'}
             ,'SIEM' : {  'fips' : '71806','name' : 'SIERRA MADRE'}
             ,'SIGH' : {  'fips' : '71876','name' : 'SIGNAL HILL'}
             ,'SIMV' : {  'fips' : '72016','name' : 'SIMI VALLEY'}
             ,'SJ'   : {  'fips' : '67126','name' : 'SAN JOAQUIN'}
             ,'SJB'  : {  'fips' : '68014','name' : 'SAN JUAN BAUTISTA'}
             ,'SJC'  : {  'fips' : '67112','name' : 'SAN JACINTO'}
             ,'SJCP' : {  'fips' : '68028','name' : 'SAN JUAN CAPISTRANO'}
             ,'SJS'  : {  'fips' : '68000','name' : 'SAN JOSE'}
             ,'SLB'  : {  'fips' : '70686','name' : 'SEAL BEACH'}
             ,'SLMO' : {  'fips' : '64434','name' : 'SAN ANSELMO'}
             ,'SLN'  : {  'fips' : '68084','name' : 'SAN LEANDRO'}
             ,'SLO'  : {  'fips' : '68154','name' : 'SAN LUIS OBISPO'}
             ,'SLTO' : {  'fips' : '73108','name' : 'SOUTH LAKE TAHOE'}
             ,'SLVG' : {  'fips' : '72576','name' : 'SOLVANG'}
             ,'SM'   : {  'fips' : '68252','name' : 'SAN MATEO'}
             ,'SMCA' : {  'fips' : '70000','name' : 'SANTA MONICA'}
             ,'SMCS' : {  'fips' : '68196','name' : 'SAN MARCOS'}
             ,'SMRA' : {  'fips' : '69196','name' : 'SANTA MARIA'}
             ,'SMRO' : {  'fips' : '68224','name' : 'SAN MARINO'}
             ,'SNDC' : {  'fips' : '65112','name' : 'SAND CITY'}
             ,'SNT'  : {  'fips' : '70224','name' : 'SANTEE'}
             ,'SOL'  : {  'fips' : '72520','name' : 'SOLEDAD'}
             ,'SOLB' : {  'fips' : '72506','name' : 'SOLANA BEACH'}
             ,'SON'  : {  'fips' : '72646','name' : 'SONOMA'}
             ,'SOWH' : {  'fips' : '73430','name' : 'SOUTH WHITTIER'}
             ,'SPA'  : {  'fips' : '70042','name' : 'SANTA PAULA'}
             ,'SPAS' : {  'fips' : '73220','name' : 'SOUTH PASADENA'}
             ,'SPB'  : {  'fips' : '68294','name' : 'SAN PABLO'}
             ,'SPVA' : {  'fips' : '73696','name' : 'SPRING VALLEY'}
             ,'SRA'  : {  'fips' : '72674','name' : 'SONORA'}
             ,'SRF'  : {  'fips' : '68364','name' : 'SAN RAFAEL'}
             ,'SRMN' : {  'fips' : '68378','name' : 'SAN RAMON'}
             ,'SRO'  : {  'fips' : '70098','name' : 'SANTA ROSA'}
             ,'SSF'  : {  'fips' : '73262','name' : 'SOUTH SAN FRANCISCO'}
             ,'SSJH' : {  'fips' : '73290','name' : 'SOUTH SAN JOSE HILLS'}
             ,'STCK' : {  'fips' : '77392','name' : 'SUTTER CREEK'}
             ,'STFD' : {  'fips' : '73906','name' : 'STANFORD'}
             ,'STKN' : {  'fips' : '75000','name' : 'STOCKTON'}
             ,'STPK' : {  'fips' : 'STPK',  'name' :'*STATE PARK'}
             ,'STT'  : {  'fips' : '73962','name' : 'STANTON'}
             ,'SUCI' : {  'fips' : '75826','name' : 'SUN CITY'}
             ,'SUIS' : {  'fips' : '75630','name' : 'SUISUN CITY'}
             ,'SUNV' : {  'fips' : '77000','name' : 'SUNNYVALE'}
             ,'SUSV' : {  'fips' : '77364','name' : 'SUSANVILLE'}
             ,'TAF'  : {  'fips' : '77574','name' : 'TAFT'}
             ,'TBRN' : {  'fips' : '78666','name' : 'TIBURON'}
             ,'TEH'  : {  'fips' : '78106','name' : 'TEHAMA'}
             ,'THOK' : {  'fips' : '78582','name' : 'THOUSAND OAKS'}
             ,'THPI' : {  'fips' : '78092','name' : 'TEHACHAPI'}
             ,'TLK'  : {  'fips' : '80686','name' : 'TULELAKE'}
             ,'TMCA' : {  'fips' : '78120','name' : 'TEMECULA'}
             ,'TMPC' : {  'fips' : '78148','name' : 'TEMPLE CITY'}
             ,'TNP'  : {  'fips' : '80994','name' : 'TWENTYNINE PALMS'}
             ,'TNPB' : {  'fips' : '81008','name' : 'TWENTYNINE PALMS BASE'}
             ,'TOR'  : {  'fips' : '80000','name' : 'TORRANCE'}
             ,'TRA'  : {  'fips' : '80238','name' : 'TRACY'}
             ,'TRK'  : {  'fips' : '80588','name' : 'TOWN OF TRUCKEE'}
             ,'TRND' : {  'fips' : '80448','name' : 'TRINIDAD'}
             ,'TUFH' : {  'fips' : '80868','name' : 'TUSTIN FOOTHILLS'}
             ,'TUL'  : {  'fips' : '80644','name' : 'TULARE'}
             ,'TUR'  : {  'fips' : '80812','name' : 'TURLOCK'}
             ,'TUS'  : {  'fips' : '80854','name' : 'TUSTIN'}
             ,'UKI'  : {  'fips' : '81134','name' : 'UKIAH'}
             ,'UNC'  : {  'fips' : '81204','name' : 'UNION CITY'}
             ,'UPL'  : {  'fips' : '81344','name' : 'UPLAND'}
             ,'USA'  : {  'fips' : 'USA',   'name' :'*US ARMY'}
             ,'USAF' : {  'fips' : 'USAF',  'name' :'*US AIR FORCE'}
             ,'USCG' : {  'fips' : 'USCG',  'name' :'*US COAST GUARD'}
             ,'USFS' : {  'fips' : 'USFS',  'name' :'*US FORESTRY SERVICE'}
             ,'USN'  : {  'fips' : 'USN',   'name' :'*US NAVY'}
             ,'VAC'  : {  'fips' : '81554','name' : 'VACAVILLE'}
             ,'VAL'  : {  'fips' : '81666','name' : 'VALLEJO'}
             ,'VALA' : {  'fips' : '81638','name' : 'VALINDA'}
             ,'VCTV' : {  'fips' : '82590','name' : 'VICTORVILLE'}
             ,'VEN'  : {  'fips' : '65042','name' : 'VENTURA'}
             ,'VER'  : {  'fips' : '82422','name' : 'VERNON'}
             ,'VIS'  : {  'fips' : '82954','name' : 'VISALIA'}
             ,'VLPK' : {  'fips' : '82744','name' : 'VILLA PARK'}
             ,'VNCT' : {  'fips' : '82814','name' : 'VINCENT'}
             ,'VPWH' : {  'fips' : '82667','name' : 'VIEW PARK-WINDSOR HILLS'}
             ,'VSTA' : {  'fips' : '82996','name' : 'VISTA'}
             ,'WAL'  : {  'fips' : '83332','name' : 'WALNUT'}
             ,'WAS'  : {  'fips' : '83542','name' : 'WASCO'}
             ,'WAT'  : {  'fips' : '83668','name' : 'WATSONVILLE'}
             ,'WCOV' : {  'fips' : '84200','name' : 'WEST COVINA'}
             ,'WCRN' : {  'fips' : '84144','name' : 'WEST CARSON'}
             ,'WD'   : {  'fips' : '86328','name' : 'WOODLAND'}
             ,'WDS'  : {  'fips' : '86440','name' : 'WOODSIDE'}
             ,'WEED' : {  'fips' : '83850','name' : 'WEED'}
             ,'WHT'  : {  'fips' : '85012','name' : 'WHEATLAND'}
             ,'WHWD' : {  'fips' : '84410','name' : 'WEST HOLLYWOOD'}
             ,'WIBK' : {  'fips' : '85614','name' : 'WILLOWBROOK'}
             ,'WIMR' : {  'fips' : '85446','name' : 'WILDOMAR'}
             ,'WIN'  : {  'fips' : '86034','name' : 'WINTERS'}
             ,'WIT'  : {  'fips' : '85292','name' : 'WHITTIER'}
             ,'WLC'  : {  'fips' : '83346','name' : 'WALNUT CREEK'}
             ,'WLK'  : {  'fips' : '86300','name' : 'WOODLAKE'}
             ,'WLKV' : {  'fips' : '84438','name' : 'WESTLAKE VILLAGE'}
             ,'WLOS' : {  'fips' : '85684','name' : 'WILLOWS'}
             ,'WLPK' : {  'fips' : '83402','name' : 'WALNUT PARK'}
             ,'WLTS' : {  'fips' : '85600','name' : 'WILLITS'}
             ,'WMD'  : {  'fips' : '84606','name' : 'WESTMORLAND'}
             ,'WMNT' : {  'fips' : '84592','name' : 'WESTMONT'}
             ,'WMS'  : {  'fips' : '85586','name' : 'WILLIAMS'}
             ,'WNSR' : {  'fips' : '85922','name' : 'WINDSOR'}
             ,'WPBG' : {  'fips' : '84704','name' : 'WEST PITTSBURG'}
             ,'WPVY' : {  'fips' : '84774','name' : 'WEST PUENTE VALLEY'}
             ,'WSAC' : {  'fips' : '84816','name' : 'WEST SACRAMENTO'}
             ,'WTM'  : {  'fips' : '84550','name' : 'WESTMINSTER'}
             ,'WTRF' : {  'fips' : '83612','name' : 'WATERFORD'}
             ,'WWLS' : {  'fips' : '84921','name' : 'WEST WHITTIER-LOS NIETOS'}
             ,'YBLN' : {  'fips' : '86832','name' : 'YORBA LINDA'}
             ,'YC'   : {  'fips' : '86972','name' : 'YUBA CITY'}
             ,'YCPA' : {  'fips' : '93850','name' : 'YUCAIPA'}
             ,'YNTV' : {  'fips' : '86930','name' : 'YOUNTVILLE'}
             ,'YRE'  : {  'fips' : '86944','name' : 'YREKA CITY'}
             ,'YUCP' : {  'fips' : '87042','name' : 'YUCAIPA'}
             ,'YUCV' : {  'fips' : '87056','name' : 'YUCCA VALLEY'}
             };
exports.cities=cities
