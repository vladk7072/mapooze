import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
import "../app.scss";
import { MainMapType, MapStateType } from "../types/MainMapTypes";
import { ZoomLogger } from "../utils/mapZoomLogger";

// import { antarcticaPolygons } from "../data/antarcticaPolygons";

// евразия
// import { kazakhstanPolygons } from "../data/kazakhstanPolygons";
// import { newzealandPolygons } from "../data/newzealandPolygons";
// import { ukrainePolygons } from "../data/ukrainePolygons";
// import { russia1Polygons } from "../data/russia1Polygons";
// import { russia2Polygons } from "../data/russia2Polygons";
// import { russia3Polygons } from "../data/russia3Polygons";
// import { polandPolygons } from "../data/polandPolygons";
// import { finlandPolygons } from "../data/finlandPolygons";
// import { belarusPolygons } from "../data/belarusPolygons";
// import { estoniaPolygons } from "../data/estoniaPolygons";
// import { latviaPolygons } from "../data/latviaPolygons";
// import { lithuaniaPolygons } from "../data/lithuaniaPolygons";
// import { norwayPolygons } from "../data/norwayPolygons";
// import { swedenPolygons } from "../data/swedenPolygons";
// import { denmarkPolygons } from "../data/denmarkPolygons";
// import { mongoliaPolygons } from "../data/mongoliaPolygons";
// import { china1Polygons } from "../data/china1Polygons";
// import { china2Polygons } from "../data/china2Polygons";
// import { china3Polygons } from "../data/china3Polygons";
// import { china4Polygons } from "../data/china4Polygons";
// import { china5Polygons } from "../data/china5Polygons";
// import { india1Polygons } from "../data/india1Polygons";
// import { india2Polygons } from "../data/india2Polygons";
// import { india3Polygons } from "../data/india3Polygons";
// import { india4Polygons } from "../data/india4Polygons";
// import { india5Polygons } from "../data/india5Polygons";
// import { nepalPolygons } from "../data/nepalPolygons";
// import { srilankaPolygons } from "../data/srilankaPolygons";
// import { taiwanPolygons } from "../data/taiwanPolygons";
// import { pakistanPolygons } from "../data/pakistanPolygons";
// import { iranPolygons } from "../data/iranPolygons";
// import { turkmenistanPolygons } from "../data/turkmenistanPolygons";
// import { australiaPolygons } from "../data/australiaPolygons";
// import { germany1Polygons } from "../data/germany1Polygons";
// import { germany2Polygons } from "../data/germany2Polygons";
// import { france1Polygons } from "../data/france1Polygons";
// import { france2Polygons } from "../data/france2Polygons";
// import { france3Polygons } from "../data/france3Polygons";
// import { france4Polygons } from "../data/france4Polygons";
// import { belgiumPolygons } from "../data/belgiumPolygons";
// import { netherlandsPolygons } from "../data/netherlandsPolygons";
// import { czehia1Polygons } from "../data/czehia1Polygons";
// import { czehia2Polygons } from "../data/czehia2Polygons";
// import { austriaPolygons } from "../data/austriaPolygons";
// import { slovakiaPolygons } from "../data/slovakiaPolygons";
// import { hungaryPolygons } from "../data/hungaryPolygons";
// import { switzerlandPolygons } from "../data/switzerlandPolygons";
// import { moldovaPolygons } from "../data/moldovaPolygons";
// import { italy1Polygons } from "../data/italy1Polygons";
// import { italy2Polygons } from "../data/italy2Polygons";
// import { italy3Polygons } from "../data/italy3Polygons";
// import { italy4Polygons } from "../data/italy4Polygons";
// import { serbia1Polygons } from "../data/serbia1Polygons";
// import { serbia2Polygons } from "../data/serbia2Polygons";
// import { bolgaria1Polygons } from "../data/bolgaria1Polygons";
// import { bolgaria2Polygons } from "../data/bolgaria2Polygons";
// import { turkeyPolygons } from "../data/turkeyPolygons";
// import { afghanistanPolygons } from "../data/afghanistanPolygons";
// import { uzbekistanPolygons } from "../data/uzbekistanPolygons";
// import { kyrgystanPolygons } from "../data/kyrgystanPolygons";
// import { georgiaPolygons } from "../data/georgiaPolygons";
// import { tajikistanPolygons } from "../data/tajikistanPolygons";
// import { bhutanPolygons } from "../data/bhutanPolygons";
// import { bangladeshPolygons } from "../data/bangladeshPolygons";
// import { laosPolygons } from "../data/laosPolygons";
// import { cambodiaPolygons } from "../data/cambodiaPolygons";
// import { armeniaPolygons } from "../data/armeniaPolygons";
// import { syriaPolygons } from "../data/syriaPolygons";
// import { england1Polygons } from "../data/england1Polygons";
// import { england2Polygons } from "../data/england2Polygons";
// import { scotland1Polygons } from "../data/scotland1Polygons";
// import { scotland2Polygons } from "../data/scotland2Polygons";
// import { scotland3Polygons } from "../data/scotland3Polygons";
// import { scotland4Polygons } from "../data/scotland4Polygons";
// import { iraqPolygons } from "../data/iraqPolygons";
// import { sauduarabiaPolygons } from "../data/sauduarabiaPolygons";
// import { yemenPolygons } from "../data/yemenPolygons";
// import { omanPolygons } from "../data/omanPolygons";
// import { uaePolygons } from "../data/uaePolygons";
// import { kuwaitPolygons } from "../data/kuwaitPolygons";
// import { izraelPolygons } from "../data/izraelPolygons";
// import { lebanonPolygons } from "../data/lebanonPolygons";
// import { greecePolygons } from "../data/greecePolygons";
// import { romaniaPolygons } from "../data/romaniaPolygons";
// import { spain1Polygons } from "../data/spain1Polygons";
// import { spain2Polygons } from "../data/spain2Polygons";
// import { spain3Polygons } from "../data/spain3Polygons";
// import { icelandPolygons } from "../data/icelandPolygons";
// import { northkoreaPolygons } from "../data/northkoreaPolygons";
// import { portugalPolygons } from "../data/portugalPolygons";
// import { jordanPolygons } from "../data/jordanPolygons";
// import { papuanewguineaPolygons } from "../data/papuanewguineaPolygons";
// import { myanmarPolygons } from "../data/myanmarPolygons";
// import { irelandPolygons } from "../data/irelandPolygons";
// import { southkoreaPolygons } from "../data/southkoreaPolygons";
// import { croatiaPolygons } from "../data/croatiaPolygons";
// import { albaniaPolygons } from "../data/albaniaPolygons";
// import { indonesiaPolygons } from "../data/indonesiaPolygons";
// import { montenegroPolygons } from "../data/montenegroPolygons";
// import { northmacedoniaPolygons } from "../data/northmacedoniaPolygons";
// import { qatarPolygons } from "../data/qatarPolygons";
// import { thailandPolygons } from "../data/thailandPolygons";
// import { vietnamPolygons } from "../data/vietnamPolygons";
// import { japan1Polygons } from "../data/japan1Polygons";
// import { japan2Polygons } from "../data/japan2Polygons";
// import { bosniaandherzegovinaPolygons } from "../data/bosniaandherzegovinaPolygons";
// import { kosovoPolygons } from "../data/kosovoPolygons";
// import { isleofmanPolygons } from "../data/isleofmanPolygons";
// import { luxembourgPolygons } from "../data/luxembourgPolygons";
// import { nakhichevanautonomousrepublicPolygons } from "../data/nakhichevanautonomousrepublicPolygons";
// import { easttimorPolygons } from "../data/easttimorPolygons";
// import { solomonislandsPolygons } from "../data/solomonislandsPolygons";
// import { vanuatuPolygons } from "../data/vanuatuPolygons";
// import { djiboutiPolygons } from "../data/djiboutiPolygons";
// import { cyprusPolygons } from "../data/cyprusPolygons";
// import { azerbaijanPolygons } from "../data/azerbaijanPolygons";
// import { faroeislandsPolygons } from "../data/faroeislandsPolygons";
// import { unitedkingdomsovereignbaseareasPolygons } from "../data/unitedkingdomsovereignbaseareasPolygons";
// import { bahrainPolygons } from "../data/bahrainPolygons";
// import { maldivesPolygons } from "../data/maldivesPolygons";
// import { malaysiaPolygons } from "../data/malaysiaPolygons";

// африка
// import { egyptPolygons } from "../data/egyptPolygons";
// import { sydanPolygons } from "../data/sydanPolygons";
// import { libyaPolygons } from "../data/libyaPolygons";
// import { tynisPolygons } from "../data/tynisPolygons";
// import { algeria1Polygons } from "../data/algeria1Polygons";
// import { algeria2Polygons } from "../data/algeria2Polygons";
// import { marokoPolygons } from "../data/marokoPolygons";
// import { chadPolygons } from "../data/chadPolygons";
// import { nigeriaPolygons } from "../data/nigeriaPolygons";
// import { madagaskarPolygons } from "../data/madagaskarPolygons";
// import { maliPolygons } from "../data/maliPolygons";
// import { mauritaniaPolygons } from "../data/mauritaniaPolygons";
// import { namibiaPolygons } from "../data/namibiaPolygons";
// import { angola1Polygons } from "../data/angola1Polygons";
// import { angola2Polygons } from "../data/angola2Polygons";
// import { botswanaPolygons } from "../data/botswanaPolygons";
// import { zambiaPolygons } from "../data/zambiaPolygons";
// import { tanzania1Polygons } from "../data/tanzania1Polygons";
// import { tanzania2Polygons } from "../data/tanzania2Polygons";
// import { cameroonPolygons } from "../data/cameroonPolygons";
// import { kenyaPolygons } from "../data/kenyaPolygons";
// import { eritreaPolygons } from "../data/eritreaPolygons";
// import { somaliaPolygons } from "../data/somaliaPolygons";
// import { seneganPolygons } from "../data/seneganPolygons";
// import { gambiaPolygons } from "../data/gambiaPolygons";
// import { guineabissauPolygons } from "../data/guineabissauPolygons";
// import { guineaPolygons } from "../data/guineaPolygons";
// import { sierraleonePolygons } from "../data/sierraleonePolygons";
// import { liberiaPolygons } from "../data/liberiaPolygons";
// import { ivorycoastPolygons } from "../data/ivorycoastPolygons";
// import { burkinafasoPolygons } from "../data/burkinafasoPolygons";
// import { ghanaPolygons } from "../data/ghanaPolygons";
// import { togoPolygons } from "../data/togoPolygons";
// import { beninPolygons } from "../data/beninPolygons";
// import { nigerPolygons } from "../data/nigerPolygons";
// import { southsudanPolygons } from "../data/southsudanPolygons";
// import { ethiopiaPolygons } from "../data/ethiopiaPolygons";
// import { centralafricanrepublicPolygons } from "../data/centralafricanrepublicPolygons";
// import { ugandaPolygons } from "../data/ugandaPolygons";
// import { rwandaPolygons } from "../data/rwandaPolygons";
// import { burundiPolygons } from "../data/burundiPolygons";
// import { gabonPolygons } from "../data/gabonPolygons";
// import { equatorialguineaPolygons } from "../data/equatorialguineaPolygons";
// import { republicofthecongoPolygons } from "../data/republicofthecongoPolygons";
// import { democraticrepublicofthecongo1Polygons } from "../data/democraticrepublicofthecongo1Polygons";
// import { democraticrepublicofthecongo2Polygons } from "../data/democraticrepublicofthecongo2Polygons";
// import { zimbabwePolygons } from "../data/zimbabwePolygons";
// import { mozambiquePolygons } from "../data/mozambiquePolygons";
// import { eswatiniPolygons } from "../data/eswatiniPolygons";
// import { lesothoPolygons } from "../data/lesothoPolygons";
// import { republicofsouthafricaPolygons } from "../data/republicofsouthafricaPolygons";
// import { mauritiusPolygons } from "../data/mauritiusPolygons";
// import { comorosPolygons } from "../data/comorosPolygons";
// import { saotomeandprincipePolygons } from "../data/saotomeandprincipePolygons";
import { philippinesPolygons } from "../data/philippinesPolygons";

// южная Америка
// import { argentina1Polygons } from "../data/argentina1Polygons";
// import { argentina2Polygons } from "../data/argentina2Polygons";
// import { boliviaPolygons } from "../data/boliviaPolygons";
// import { brazil1Polygons } from "../data/brazil1Polygons";
// import { brazil2Polygons } from "../data/brazil2Polygons";
// import { paraguayPolygons } from "../data/paraguayPolygons";
// import { peruPolygons } from "../data/peruPolygons";
// import { venezuelaPolygons } from "../data/venezuelaPolygons";
// import { ecuadorPolygons } from "../data/ecuadorPolygons";
// import { colombiaPolygons } from "../data/colombiaPolygons";
// import { surinamePolygons } from "../data/surinamePolygons";
// import { guyanaPolygons } from "../data/guyanaPolygons";
// import { uruguayPolygons } from "../data/uruguayPolygons";
// import { chili1Polygons } from "../data/chili1Polygons";
// import { chili2Polygons } from "../data/chili2Polygons";
// import { falklandislandsPolygons } from "../data/falklandislandsPolygons";
// import { southgeorgiaPolygons } from "../data/southgeorgiaPolygons";

// северная америка
// import { panamaPolygons } from "../data/panamaPolygons";
// import { cubaPolygons } from "../data/cubaPolygons";
// import { antiguaandbarbudaPolygons } from "../data/antiguaandbarbudaPolygons";
// import { bahamasPolygons } from "../data/bahamasPolygons";
// import { barbadosPolygons } from "../data/barbadosPolygons";
// import { unitedstates1Polygons } from "../data/unitedstates1Polygons";
// import { unitedstates2Polygons } from "../data/unitedstates2Polygons";
// import { belizePolygons } from "../data/belizePolygons";
// import { haitiPolygons } from "../data/haitiPolygons";
// import { guatemalaPolygons } from "../data/guatemalaPolygons";
// import { mexicoPolygons } from "../data/mexicoPolygons";
// import { hondurasPolygons } from "../data/hondurasPolygons";
// import { dominicaPolygons } from "../data/dominicaPolygons";
// import { dominicanrepublicPolygons } from "../data/dominicanrepublicPolygons";
// import { canadaPolygons } from "../data/canadaPolygons";
// import { costaricaPolygons } from "../data/costaricaPolygons";
// import { nicaraguaPolygons } from "../data/nicaraguaPolygons";
// import { saintvincentandthegrenadinesPolygons } from "../data/saintvincentandthegrenadinesPolygons";
// import { martinykaPolygons } from "../data/martinykaPolygons";
// import { saintkittsandnevisPolygons } from "../data/saintkittsandnevisPolygons";
// import { grenadaPolygons } from "../data/grenadaPolygons";
// import { jamaicaPolygons } from "../data/jamaicaPolygons";
// import { saintluciaPolygons } from "../data/saintluciaPolygons";
// import { trinidadandtobagoPolygons } from "../data/trinidadandtobagoPolygons";
// import { anguillaPolygons } from "../data/anguillaPolygons";
// import { arubaPolygons } from "../data/arubaPolygons";
// import { bermudaPolygons } from "../data/bermudaPolygons";
// import { greenlandPolygons } from "../data/greenlandPolygons";
// import { bonairePolygons } from "../data/bonairePolygons";
// import { sinteustatiusandsabaPolygons } from "../data/sinteustatiusandsabaPolygons";
// import { virginislandsUKPolygons } from "../data/virginislandsUKPolygons";
// import { virginislandsUSPolygons } from "../data/virginislandsUSPolygons";
// import { сaymanislandsPolygons } from "../data/сaymanislandsPolygons";
// import { tabascoPolygons } from "../data/tabascoPolygons";
// import { guadeloupePolygons } from "../data/guadeloupePolygons";
// import { clippertonPolygons } from "../data/clippertonPolygons";
// import { сuraсaoPolygons } from "../data/сuraсaoPolygons";
// import { montserratPolygons } from "../data/montserratPolygons";
// import { navassaPolygons } from "../data/navassaPolygons";
// import { puertoricoPolygons } from "../data/puertoricoPolygons";
// import { saintbarthelemyPolygons } from "../data/saintbarthelemyPolygons";
// import { turksandcaicosPolygons } from "../data/turksandcaicosPolygons";
// import { saintpierrePolygons } from "../data/saintpierrePolygons";

// import { elsalvadorPolygons } from "../data/elsalvadorPolygons";
// import { gazaPolygons } from "../data/gazaPolygons";
// import { walesPolygons } from "../data/walesPolygons";
// import { northernirelandPolygons } from "../data/northernirelandPolygons";
// import { fijiPolygons } from "../data/fijiPolygons";
// import { capeverdePolygons } from "../data/capeverdePolygons";
// import { maltaPolygons } from "../data/maltaPolygons";

// full polygon
// import { сaymanislandsFullPolygon } from "../dataFulPolygons/сaymanislandsFullPolygon";
// import { сuraсaoFullPolygon } from "../dataFulPolygons/сuraсaoFullPolygon";
// import { afghanistanFullPolygon } from "../dataFulPolygons/afghanistanFullPolygon";
// import { albaniaFullPolygon } from "../dataFulPolygons/albaniaFullPolygon";
// import { algeriaFullPolygon } from "../dataFulPolygons/algeriaFullPolygon";
// import { angolaFullPolygons } from "../dataFulPolygons/angolaFullPolygons";
// import { anguillaFullPolygon } from "../dataFulPolygons/anguillaFullPolygon";
// import { antiguaandbarbudaFullPolygon } from "../dataFulPolygons/antiguaandbarbudaFullPolygon";
// import { argentinaFullPolygon } from "../dataFulPolygons/argentinaFullPolygon";
// import { armeniaFullPolygon } from "../dataFulPolygons/armeniaFullPolygon";
// import { arubaFullPolygon } from "../dataFulPolygons/arubaFullPolygon";
// import { australiaFullPolygon } from "../dataFulPolygons/australiaFullPolygon";
// import { austriaFullPolygon } from "../dataFulPolygons/austriaFullPolygon";
// import { bahamasFullPolygon } from "../dataFulPolygons/bahamasFullPolygon";
// import { bangladeshFullPolygon } from "../dataFulPolygons/bangladeshFullPolygon";
// import { barbadosFullPolygon } from "../dataFulPolygons/barbadosFullPolygon";
// import { belarusFullPolygon } from "../dataFulPolygons/belarusFullPolygon";
// import { belgiumFullPolygon } from "../dataFulPolygons/belgiumFullPolygon";
// import { belizeFullPolygon } from "../dataFulPolygons/belizeFullPolygon";
// import { beninFullPolygon } from "../dataFulPolygons/beninFullPolygon";
// import { bermudaFullPolygon } from "../dataFulPolygons/bermudaFullPolygon";
// import { burundiFullPolygon } from "../dataFulPolygons/burundiFullPolygon";
// import { bhutanFullPolygon } from "../dataFulPolygons/bhutanFullPolygon";
// import { bolgariaFullPolygon } from "../dataFulPolygons/bolgariaFullPolygon";
// import { boliviaFullPolygon } from "../dataFulPolygons/boliviaFullPolygon";
// import { bonaireFullPolygon } from "../dataFulPolygons/bonaireFullPolygon";
// import { netherlandsFullPolygon } from "../dataFulPolygons/netherlandsFullPolygon";
// import { republicofsouthafricaFullPolygon } from "../dataFulPolygons/republicofsouthafricaFullPolygon";

// import { botswanaFullPolygon } from "../dataFulPolygons/botswanaFullPolygon";
// import { brazilFullPolygon } from "../dataFulPolygons/brazilFullPolygon";
// import { burkinafasoFullPolygon } from "../dataFulPolygons/burkinafasoFullPolygon";
// import { cambodiaFullPolygon } from "../dataFulPolygons/cambodiaFullPolygon";
// import { cameroonFullPolygon } from "../dataFulPolygons/cameroonFullPolygon";
// import { canadaFullPolygon } from "../dataFulPolygons/canadaFullPolygon";
// import { centralafricanrepublicFullPolygon } from "../dataFulPolygons/centralafricanrepublicFullPolygon";
// import { chadFullPolygon } from "../dataFulPolygons/chadFullPolygon";
// import { chiliFullPolygon } from "../dataFulPolygons/chiliFullPolygon";
// import { chinaFullPolygon } from "../dataFulPolygons/chinaFullPolygon";
// import { clippertonFullPolygon } from "../dataFulPolygons/clippertonFullPolygon";
// import { colombiaFullPolygon } from "../dataFulPolygons/colombiaFullPolygon";
// import { comorosFullPolygon } from "../dataFulPolygons/comorosFullPolygon";
// import { costaricaFullPolygon } from "../dataFulPolygons/costaricaFullPolygon";
// import { croatiaFullPolygon } from "../dataFulPolygons/croatiaFullPolygon";
// import { cubaFullPolygon } from "../dataFulPolygons/cubaFullPolygon";
// import { czehiaFullPolygon } from "../dataFulPolygons/czehiaFullPolygon";
// import { democraticrepublicofthecongoFullPolygon } from "../dataFulPolygons/democraticrepublicofthecongoFullPolygon";
// import { denmarkFullPolygon } from "../dataFulPolygons/denmarkFullPolygon";
// import { dominicaFullPolygon } from "../dataFulPolygons/dominicaFullPolygon";
// import { dominicanrepublicFullPolygon } from "../dataFulPolygons/dominicanrepublicFullPolygon";
// import { ecuadorFullPolygin } from "../dataFulPolygons/ecuadorFullPolygin";
// import { egyptFullPolygon } from "../dataFulPolygons/egyptFullPolygon";
// import { englandFullPolygons } from "../dataFulPolygons/englandFullPolygons";
// import { equatorialguineaFullPolygon } from "../dataFulPolygons/equatorialguineaFullPolygon";
// import { easttimorFullPolygon } from "../dataFulPolygons/easttimorFullPolygon";

// import { eritreaFullPolygon } from "../dataFulPolygons/eritreaFullPolygon";
// import { estoniaFullPolygon } from "../dataFulPolygons/estoniaFullPolygon";
// import { eswatiniFullPolygon } from "../dataFulPolygons/eswatiniFullPolygon";
// import { ethiopiaFullPolygon } from "../dataFulPolygons/ethiopiaFullPolygon";
// import { falklandislandsFullPolygon } from "../dataFulPolygons/falklandislandsFullPolygon";
// import { finlandFullPolygon } from "../dataFulPolygons/finlandFullPolygon";
// import { franceFullPolygon } from "../dataFulPolygons/franceFullPolygon";
// import { gabonFullPolygon } from "../dataFulPolygons/gabonFullPolygon";
// import { gambiaFulPolygon } from "../dataFulPolygons/gambiaFulPolygon";
// import { georgiaFullPolygon } from "../dataFulPolygons/georgiaFullPolygon";
// import { germanyFullPolygon } from "../dataFulPolygons/germanyFullPolygon";
// import { ghanaFullPolygon } from "../dataFulPolygons/ghanaFullPolygon";
// import { greeceFullPolygon } from "../dataFulPolygons/greeceFullPolygon";
// import { greenlandFullPolygon } from "../dataFulPolygons/greenlandFullPolygon";
// import { grenadaFullPolygon } from "../dataFulPolygons/grenadaFullPolygon";
// import { guadeloupeFullPolygon } from "../dataFulPolygons/guadeloupeFullPolygon";
// import { guatemalaFullPolygon } from "../dataFulPolygons/guatemalaFullPolygon";
// import { guineabissauFullPolygon } from "../dataFulPolygons/guineabissauFullPolygon";
// import { guineaFullPolygon } from "../dataFulPolygons/guineaFullPolygon";
// import { guyanaFullPolygon } from "../dataFulPolygons/guyanaFullPolygon";
// import { haitiFullPolygon } from "../dataFulPolygons/haitiFullPolygon";
// import { hondurasFullPolygon } from "../dataFulPolygons/hondurasFullPolygon";
// import { hungaryFullPolygon } from "../dataFulPolygons/hungaryFullPolygon";
// import { icelandFullPolygon } from "../dataFulPolygons/icelandFullPolygon";
// import { indiaFullPolygon } from "../dataFulPolygons/indiaFullPolygon";
// import { indonesiaFullPolygon } from "../dataFulPolygons/indonesiaFullPolygon";

// import { iranFullPolygon } from "../dataFulPolygons/iranFullPolygon";
// import { iraqFullPolygon } from "../dataFulPolygons/iraqFullPolygon";
// import { irelandFullPolygon } from "../dataFulPolygons/irelandFullPolygon";
// import { italyFullPolygon } from "../dataFulPolygons/italyFullPolygon";
// import { ivorycoastFullPolygon } from "../dataFulPolygons/ivorycoastFullPolygon";
// import { izraelFullPolygon } from "../dataFulPolygons/izraelFullPolygon";
// import { jamaicaFullPolygon } from "../dataFulPolygons/jamaicaFullPolygon";
// import { japanFullPolygon } from "../dataFulPolygons/japanFullPolygon";
// import { jordanFullPolygon } from "../dataFulPolygons/jordanFullPolygon";
// import { kazakhstanFullPolygon } from "../dataFulPolygons/kazakhstanFullPolygon";
// import { kenyaFullPolygon } from "../dataFulPolygons/kenyaFullPolygon";
// import { kuwaitFullPolygon } from "../dataFulPolygons/kuwaitFullPolygon";
// import { kyrgystanFullPolygon } from "../dataFulPolygons/kyrgystanFullPolygon";
// import { laosFullPolygon } from "../dataFulPolygons/laosFullPolygon";
// import { lebanonFullPolygon } from "../dataFulPolygons/lebanonFullPolygon";
// import { lesothoFullPolygon } from "../dataFulPolygons/lesothoFullPolygon";
// import { liberiaFullPolygon } from "../dataFulPolygons/liberiaFullPolygon";
// import { libyaFullPolygon } from "../dataFulPolygons/libyaFullPolygon";
// import { lithuaniaFullPolygon } from "../dataFulPolygons/lithuaniaFullPolygon";
// import { madagaskarFullPolygon } from "../dataFulPolygons/madagaskarFullPolygon";
// import { malaviFullPolygon } from "../dataFulPolygons/malaviFullPolygon";
// import { malaysiaFullPolygon } from "../dataFulPolygons/malaysiaFullPolygon";
// import { maliFullPolygon } from "../dataFulPolygons/maliFullPolygon";
// import { marokoFullPolygon } from "../dataFulPolygons/marokoFullPolygon";
// import { martinykaFullPolygon } from "../dataFulPolygons/martinykaFullPolygon";
// import { mauritaniaFullPolygon } from "../dataFulPolygons/mauritaniaFullPolygon";

// import { mauritiusFullPolygon } from "../dataFulPolygons/mauritiusFullPolygon";
// import { mexicoFullPolygon } from "../dataFulPolygons/mexicoFullPolygon";
// import { moldovaFullPolygon } from "../dataFulPolygons/moldovaFullPolygon";
// import { mongoliaFullPolygon } from "../dataFulPolygons/mongoliaFullPolygon";
// import { montenegroFullPolygon } from "../dataFulPolygons/montenegroFullPolygon";
// import { montserratFullPolygon } from "../dataFulPolygons/montserratFullPolygon";
// import { mozambiqueFullPolygon } from "../dataFulPolygons/mozambiqueFullPolygon";
// import { myanmarFullPolygon } from "../dataFulPolygons/myanmarFullPolygon";
// import { namibiaFullPolygon } from "../dataFulPolygons/namibiaFullPolygon";
// import { navassaFullPolygon } from "../dataFulPolygons/navassaFullPolygon";
// import { nepalFullPolygon } from "../dataFulPolygons/nepalFullPolygon";
// import { nicaraguaFullPolygon } from "../dataFulPolygons/nicaraguaFullPolygon";
// import { nigerFullPolygon } from "../dataFulPolygons/nigerFullPolygon";
// import { nigeriaFullPolygon } from "../dataFulPolygons/nigeriaFullPolygon";
// import { northkoreaFullPolygon } from "../dataFulPolygons/northkoreaFullPolygon";
// import { northmacedoniaFullPolygon } from "../dataFulPolygons/northmacedoniaFullPolygon";
// import { norwayFullPolygon } from "../dataFulPolygons/norwayFullPolygon";
// import { omanFullPolygon } from "../dataFulPolygons/omanFullPolygon";
// import { pakistanFullPolygon } from "../dataFulPolygons/pakistanFullPolygon";
// import { panamaFullPolygon } from "../dataFulPolygons/panamaFullPolygon";
// import { papuanewguineaFullPolygon } from "../dataFulPolygons/papuanewguineaFullPolygon";
// import { paraguayFullPolygon } from "../dataFulPolygons/paraguayFullPolygon";
// import { peruFullPolygon } from "../dataFulPolygons/peruFullPolygon";
// import { philippinesFullPolygon } from "../dataFulPolygons/philippinesFullPolygon";
// import { polandFullPolygon } from "../dataFulPolygons/polandFullPolygon";

// import { portugalFullPolygon } from "../dataFulPolygons/portugalFullPolygon";
// import { puertoricoFullPolygon } from "../dataFulPolygons/puertoricoFullPolygon";
// import { qatarFullPolygon } from "../dataFulPolygons/qatarFullPolygon";
// import { republicofadygeaFullPolygon } from "../dataFulPolygons/republicofadygeaFullPolygon";
// import { republicofthecongoFullPolygon } from "../dataFulPolygons/republicofthecongoFullPolygon";
// import { romaniaFullPolygon } from "../dataFulPolygons/romaniaFullPolygon";
// import { russiaFullPolygon } from "../dataFulPolygons/russiaFullPolygon";
// import { rwandaFullPolygon } from "../dataFulPolygons/rwandaFullPolygon";
// import { sainmartenFullPolygon } from "../dataFulPolygons/sainmartenFullPolygon";
// import { saintbarthelemyFullPolygon } from "../dataFulPolygons/saintbarthelemyFullPolygon";
// import { saintkittsandnevisFullPolygon } from "../dataFulPolygons/saintkittsandnevisFullPolygon";
// import { saintluciaFullPolygon } from "../dataFulPolygons/saintluciaFullPolygon";
// import { saintpierreFullPolygon } from "../dataFulPolygons/saintpierreFullPolygon";
// import { saintvincentandthegrenadinesFullPolygon } from "../dataFulPolygons/saintvincentandthegrenadinesFullPolygon";
// import { saotomeandprincipeFullPolygon } from "../dataFulPolygons/saotomeandprincipeFullPolygon";
// import { sauduarabiaFullPolygon } from "../dataFulPolygons/sauduarabiaFullPolygon";
// import { scotlandFullPolygon } from "../dataFulPolygons/scotlandFullPolygon";
// import { seneganFullPolygon } from "../dataFulPolygons/seneganFullPolygon";
// import { serbiaFullPolygon } from "../dataFulPolygons/serbiaFullPolygon";
// import { sierraleoneFullPolygon } from "../dataFulPolygons/sierraleoneFullPolygon";
// import { sinteustatiusandsabaFullPolygon } from "../dataFulPolygons/sinteustatiusandsabaFullPolygon";
// import { sintmaartenFullPolygon } from "../dataFulPolygons/sintmaartenFullPolygon";

// import { somaliaFullPolygon } from "../dataFulPolygons/somaliaFullPolygon";
// import { southgeorgiaFullPolygon } from "../dataFulPolygons/southgeorgiaFullPolygon";
// import { southkoreaFullPolygon } from "../dataFulPolygons/southkoreaFullPolygon";
// import { southsudanFullPolygon } from "../dataFulPolygons/southsudanFullPolygon";
// import { spainFullPolygon } from "../dataFulPolygons/spainFullPolygon";
// import { srilankaFullPolygon } from "../dataFulPolygons/srilankaFullPolygon";
// import { surinameFullPolygon } from "../dataFulPolygons/surinameFullPolygon";
// import { swedenFullPolygon } from "../dataFulPolygons/swedenFullPolygon";
// import { switzerlandFullPolygon } from "../dataFulPolygons/switzerlandFullPolygon";
// import { slovakiaFullPolygon } from "../dataFulPolygons/slovakiaFullPolygon";
// import { sydanFullPolygon } from "../dataFulPolygons/sydanFullPolygon";
// import { syriaFullPolygon } from "../dataFulPolygons/syriaFullPolygon";
// import { taiwanFullPolygon } from "../dataFulPolygons/taiwanFullPolygon";
// import { tajikistanFullPolygon } from "../dataFulPolygons/tajikistanFullPolygon";
// import { tanzaniaFullPolygon } from "../dataFulPolygons/tanzaniaFullPolygon";
// import { thailandFullPolygon } from "../dataFulPolygons/thailandFullPolygon";
// import { togoFullPolygon } from "../dataFulPolygons/togoFullPolygon";
// import { trinidadandtobagoFullPolygon } from "../dataFulPolygons/trinidadandtobagoFullPolygon";
// import { turkeyFullPolygon } from "../dataFulPolygons/turkeyFullPolygon";
// import { turkmenistanFullPolygon } from "../dataFulPolygons/turkmenistanFullPolygon";
// import { turksandcaicosFullPolygon } from "../dataFulPolygons/turksandcaicosFullPolygon";

// import { tynisFullPolygon } from "../dataFulPolygons/tynisFullPolygon";
// import { uaeFullPolygon } from "../dataFulPolygons/uaeFullPolygon";
// import { ugandaFullPolygon } from "../dataFulPolygons/ugandaFullPolygon";
// import { ukraineFullPolygon } from "../dataFulPolygons/ukraineFullPolygon";
// import { unitedstatesFullPoygon } from "../dataFulPolygons/unitedstatesFullPoygon";
// import { uruguayFullPolygon } from "../dataFulPolygons/uruguayFullPolygon";
// import { uzbekistanFullPolygon } from "../dataFulPolygons/uzbekistanFullPolygon";
// import { venezuelaFullPolygon } from "../dataFulPolygons/venezuelaFullPolygon";
// import { vietnamFullPolygon } from "../dataFulPolygons/vietnamFullPolygon";
// import { virginislandsUKFullPolygon } from "../dataFulPolygons/virginislandsUKFullPolygon";
// import { yemenFullPolygon } from "../dataFulPolygons/yemenFullPolygon";
// import { zambiaFullPolygon } from "../dataFulPolygons/zambiaFullPolygon";
// import { zimbabweFullPolygon } from "../dataFulPolygons/zimbabweFullPolygon";
// import { latviaFullPolygon } from "../dataFulPolygons/latviaFullPolygon";
// import { sloveniaFullPolygon } from "../dataFulPolygons/sloveniaFullPolygon";
// import { newzealandFullPolygon } from "../dataFulPolygons/newzealandFullPolygon";

// import { bosniaandherzegovinaFullPolygon } from "../dataFulPolygons/bosniaandherzegovinaFullPolygon";
// import { kosovoFullPolygon } from "../dataFulPolygons/kosovoFullPolygon";
// import { isleofmanFullPolygon } from "../dataFulPolygons/isleofmanFullPolygon";
// import { luxembourgFullPolygon } from "../dataFulPolygons/luxembourgFullPolygon";
// import { nakhichevanautonomousrepublicFullPolygon } from "../dataFulPolygons/nakhichevanautonomousrepublicFullPolygon";
// import { solomonislandsFullPolygon } from "../dataFulPolygons/solomonislandsFullPolygon";
// import { vanuatuFullPolygon } from "../dataFulPolygons/vanuatuFullPolygon";
// import { djiboutiFullPolygon } from "../dataFulPolygons/djiboutiFullPolygon";
// import { cyprusFullPolygon } from "../dataFulPolygons/cyprusFullPolygon";
// import { gazaFullPolygon } from "../dataFulPolygons/gazaFullPolygon";
// import { azerbaijanFullPolygon } from "../dataFulPolygons/azerbaijanFullPolygon";
// import { faroeislandsFullPolygon } from "../dataFulPolygons/faroeislandsFullPolygon";
// import { walesFullPolygon } from "../dataFulPolygons/walesFullPolygon";
// import { unitedkingdomsovereignbaseareasFullPolygon } from "../dataFulPolygons/unitedkingdomsovereignbaseareasFullPolygon";
// import { northernirelandFullPolygon } from "../dataFulPolygons/northernirelandFullPolygon";
// import { elsalvadorFullPolygon } from "../dataFulPolygons/elsalvadorFullPolygon";
// import { fijiFullPolygon } from "../dataFulPolygons/fijiFullPolygon";
// import { capeverdeFullPolygon } from "../dataFulPolygons/capeverdeFullPolygon";
// import { maltaFullPolygon } from "../dataFulPolygons/maltaFullPolygon";
// import { bahrainFullPolygon } from "../dataFulPolygons/bahrainFullPolygon";
// import { maldivesFullPolygon } from "../dataFulPolygons/maldivesFullPolygon";

export const MainMap: FC<MainMapType> = ({ isDarkTheme }) => {
  const dbbase = [
    // antarcticaPolygons,
    // luxembourgPolygons,
    // kazakhstanPolygons,
    // japan1Polygons,
    // japan2Polygons,
    // gazaPolygons,
    // bosniaandherzegovinaPolygons,
    // newzealandPolygons,
    // ukrainePolygons,
    // russia1Polygons,
    // russia2Polygons,
    // russia3Polygons,
    // polandPolygons,
    // finlandPolygons,
    // belarusPolygons,
    // estoniaPolygons,
    // latviaPolygons,
    // lithuaniaPolygons,
    // norwayPolygons,
    // swedenPolygons,
    // denmarkPolygons,
    // mongoliaPolygons,
    // china1Polygons,
    // china2Polygons,
    // china3Polygons,
    // china4Polygons,
    // china5Polygons,
    // india1Polygons,
    // india2Polygons,
    // india3Polygons,
    // india4Polygons,
    // india5Polygons,
    // nepalPolygons,
    // srilankaPolygons,
    // taiwanPolygons,
    // pakistanPolygons,
    // iranPolygons,
    // turkmenistanPolygons,
    // australiaPolygons,
    // germany1Polygons,
    // germany2Polygons,
    // france1Polygons,
    // france2Polygons,
    // france3Polygons,
    // france4Polygons,
    // belgiumPolygons,
    // solomonislandsPolygons,
    // netherlandsPolygons,
    // czehia1Polygons,
    // czehia2Polygons,
    // austriaPolygons,
    // slovakiaPolygons,
    // hungaryPolygons,
    // switzerlandPolygons,
    // moldovaPolygons,
    // italy1Polygons,
    // italy2Polygons,
    // italy3Polygons,
    // italy4Polygons,
    // serbia1Polygons,
    // serbia2Polygons,
    // bolgaria1Polygons,
    // bolgaria2Polygons,
    // turkeyPolygons,
    // afghanistanPolygons,
    // uzbekistanPolygons,
    // kyrgystanPolygons,
    // georgiaPolygons,
    // tajikistanPolygons,
    // bhutanPolygons,
    // bangladeshPolygons,
    // laosPolygons,
    // cambodiaPolygons,
    // armeniaPolygons,
    // syriaPolygons,
    // england1Polygons,
    // england2Polygons,
    // scotland1Polygons,
    // scotland2Polygons,
    // scotland3Polygons,
    // scotland4Polygons,
    // iraqPolygons,
    // sauduarabiaPolygons,
    // yemenPolygons,
    // omanPolygons,
    // uaePolygons,
    // kuwaitPolygons,
    // izraelPolygons,
    // lebanonPolygons,
    // greecePolygons,
    // romaniaPolygons,
    // spain1Polygons,
    // spain2Polygons,
    // spain3Polygons,
    // icelandPolygons,
    // northkoreaPolygons,
    // portugalPolygons,
    // jordanPolygons,
    // papuanewguineaPolygons,
    // myanmarPolygons,
    // nakhichevanautonomousrepublicPolygons,
    // irelandPolygons,
    // isleofmanPolygons,
    // southkoreaPolygons,
    // croatiaPolygons,
    // albaniaPolygons,
    // malaysiaPolygons,
    // indonesiaPolygons,
    // montenegroPolygons,
    // northmacedoniaPolygons,
    // qatarPolygons,
    // thailandPolygons,
    philippinesPolygons,
    // vietnamPolygons,
    // easttimorPolygons,
    // vanuatuPolygons,
    // djiboutiPolygons,
    // cyprusPolygons,
    // azerbaijanPolygons,
    // walesPolygons,
    // unitedkingdomsovereignbaseareasPolygons,
    // northernirelandPolygons,
    // capeverdePolygons,
    // maltaPolygons,
    // bahrainPolygons,
    // maldivesPolygons,
    // Африка
    // egyptPolygons,
    // sydanPolygons,
    // libyaPolygons,
    // tynisPolygons,
    // algeria1Polygons,
    // algeria2Polygons,
    // marokoPolygons,
    // chadPolygons,
    // nigeriaPolygons,
    // madagaskarPolygons,
    // maliPolygons,
    // mauritaniaPolygons,
    // namibiaPolygons,
    // angola1Polygons,
    // angola2Polygons,
    // botswanaPolygons,
    // zambiaPolygons,
    // tanzania1Polygons,
    // tanzania2Polygons,
    // cameroonPolygons,
    // kenyaPolygons,
    // eritreaPolygons,
    // somaliaPolygons,
    // seneganPolygons,
    // gambiaPolygons,
    // guineabissauPolygons,
    // guineaPolygons,
    // sierraleonePolygons,
    // liberiaPolygons,
    // ivorycoastPolygons,
    // burkinafasoPolygons,
    // ghanaPolygons,
    // togoPolygons,
    // beninPolygons,
    // nigerPolygons,
    // southsudanPolygons,
    // ethiopiaPolygons,
    // centralafricanrepublicPolygons,
    // ugandaPolygons,
    // rwandaPolygons,
    // burundiPolygons,
    // gabonPolygons,
    // equatorialguineaPolygons,
    // republicofthecongoPolygons,
    // democraticrepublicofthecongo1Polygons,
    // democraticrepublicofthecongo2Polygons,
    // zimbabwePolygons,
    // mozambiquePolygons,
    // eswatiniPolygons,
    // lesothoPolygons,
    // republicofsouthafricaPolygons,
    // mauritiusPolygons,
    // comorosPolygons,
    // saotomeandprincipePolygons,
    // южная америка
    // argentina1Polygons,
    // argentina2Polygons,
    // boliviaPolygons,
    // brazil1Polygons,
    // brazil2Polygons,
    // paraguayPolygons,
    // peruPolygons,
    // venezuelaPolygons,
    // ecuadorPolygons,
    // colombiaPolygons,
    // surinamePolygons,
    // guyanaPolygons,
    // uruguayPolygons,
    // chili1Polygons,
    // chili2Polygons,
    // falklandislandsPolygons,
    // southgeorgiaPolygons,
    // северная америка
    // panamaPolygons,
    // cubaPolygons,
    // antiguaandbarbudaPolygons,
    // bahamasPolygons,
    // barbadosPolygons,
    // unitedstates1Polygons,
    // unitedstates2Polygons,
    // belizePolygons,
    // haitiPolygons,
    // guatemalaPolygons,
    // mexicoPolygons,
    // hondurasPolygons,
    // dominicaPolygons,
    // dominicanrepublicPolygons,
    // canadaPolygons,
    // costaricaPolygons,
    // nicaraguaPolygons,
    // saintvincentandthegrenadinesPolygons,
    // martinykaPolygons,
    // saintkittsandnevisPolygons,
    // grenadaPolygons,
    // jamaicaPolygons,
    // saintluciaPolygons,
    // trinidadandtobagoPolygons,
    // anguillaPolygons,
    // arubaPolygons,
    // bermudaPolygons,
    // greenlandPolygons,
    // bonairePolygons,
    // sinteustatiusandsabaPolygons,
    // virginislandsUKPolygons,
    // virginislandsUSPolygons,
    // сaymanislandsPolygons,
    // tabascoPolygons,
    // guadeloupePolygons,
    // clippertonPolygons,
    // сuraсaoPolygons,
    // montserratPolygons,
    // navassaPolygons,
    // puertoricoPolygons,
    // saintbarthelemyPolygons,
    // turksandcaicosPolygons,
    // saintpierrePolygons,
    // elsalvadorPolygons,
    // kosovoPolygons,
    // faroeislandsPolygons,
    // fijiPolygons
  ] as any;

  // const dbbase = [
  // сaymanislandsFullPolygon,
  // сuraсaoFullPolygon,
  // afghanistanFullPolygon,
  // albaniaFullPolygon,
  // algeriaFullPolygon,
  // angolaFullPolygons,
  // anguillaFullPolygon,
  // antiguaandbarbudaFullPolygon,
  // argentinaFullPolygon,
  // armeniaFullPolygon,
  // arubaFullPolygon,
  // australiaFullPolygon,
  // austriaFullPolygon,
  // bahamasFullPolygon,
  // bangladeshFullPolygon,
  // barbadosFullPolygon,
  // belarusFullPolygon,
  // belgiumFullPolygon,
  // belizeFullPolygon,
  // beninFullPolygon,
  // bermudaFullPolygon,
  // bhutanFullPolygon,
  // bolgariaFullPolygon,
  // boliviaFullPolygon,
  // bonaireFullPolygon,
  // netherlandsFullPolygon,
  // republicofsouthafricaFullPolygon,
  // burundiFullPolygon,

  // botswanaFullPolygon,
  // brazilFullPolygon,
  // burkinafasoFullPolygon,
  // cambodiaFullPolygon,
  // cameroonFullPolygon,
  // canadaFullPolygon,
  // centralafricanrepublicFullPolygon,
  // chadFullPolygon,
  // chiliFullPolygon,
  // chinaFullPolygon,
  // clippertonFullPolygon,
  // colombiaFullPolygon,
  // comorosFullPolygon,
  // costaricaFullPolygon,
  // croatiaFullPolygon,
  // cubaFullPolygon,
  // czehiaFullPolygon,
  // democraticrepublicofthecongoFullPolygon,
  // denmarkFullPolygon,
  // dominicaFullPolygon,
  // dominicanrepublicFullPolygon,
  // ecuadorFullPolygin,
  // egyptFullPolygon,
  // englandFullPolygons,
  // equatorialguineaFullPolygon,
  // easttimorFullPolygon,
  // solomonislandsFullPolygon,

  // eritreaFullPolygon,
  // estoniaFullPolygon,
  // eswatiniFullPolygon,
  // ethiopiaFullPolygon,
  // falklandislandsFullPolygon,
  // finlandFullPolygon,
  // franceFullPolygon,
  // gabonFullPolygon,
  // gambiaFulPolygon,
  // georgiaFullPolygon,
  // germanyFullPolygon,
  // ghanaFullPolygon,
  // greeceFullPolygon,
  // greenlandFullPolygon,
  // grenadaFullPolygon,
  // guadeloupeFullPolygon,
  // guatemalaFullPolygon,
  // guineabissauFullPolygon,
  // guineaFullPolygon,
  // guyanaFullPolygon,
  // haitiFullPolygon,
  // hondurasFullPolygon,
  // hungaryFullPolygon,
  // icelandFullPolygon,
  // indiaFullPolygon,
  // indonesiaFullPolygon,

  // iranFullPolygon,
  // iraqFullPolygon,
  // irelandFullPolygon,
  // italyFullPolygon,
  // ivorycoastFullPolygon,
  // izraelFullPolygon,
  // jamaicaFullPolygon,
  // japanFullPolygon,
  // jordanFullPolygon,
  // kazakhstanFullPolygon,
  // kenyaFullPolygon,
  // kuwaitFullPolygon,
  // kyrgystanFullPolygon,
  // laosFullPolygon,
  // lebanonFullPolygon,
  // lesothoFullPolygon,
  // liberiaFullPolygon,
  // libyaFullPolygon,
  // lithuaniaFullPolygon,
  // madagaskarFullPolygon,
  // malaviFullPolygon,
  // malaysiaFullPolygon,
  // maliFullPolygon,
  // marokoFullPolygon,
  // martinykaFullPolygon,
  // mauritaniaFullPolygon,

  // mauritiusFullPolygon,
  // mexicoFullPolygon,
  // moldovaFullPolygon,
  // mongoliaFullPolygon,
  // montenegroFullPolygon,
  // montserratFullPolygon,
  // mozambiqueFullPolygon,
  // myanmarFullPolygon,
  // namibiaFullPolygon,
  // navassaFullPolygon,
  // nepalFullPolygon,
  // nicaraguaFullPolygon,
  // nigerFullPolygon,
  // nigeriaFullPolygon,
  // northkoreaFullPolygon,
  // northmacedoniaFullPolygon,
  // norwayFullPolygon,
  // omanFullPolygon,
  // pakistanFullPolygon,
  // panamaFullPolygon,
  // papuanewguineaFullPolygon,
  // paraguayFullPolygon,
  // peruFullPolygon,
  // philippinesFullPolygon,
  // polandFullPolygon,

  // portugalFullPolygon,
  // puertoricoFullPolygon,
  // qatarFullPolygon,
  // republicofadygeaFullPolygon,
  // republicofthecongoFullPolygon,
  // romaniaFullPolygon,
  // russiaFullPolygon,
  // rwandaFullPolygon,
  // sainmartenFullPolygon,
  // saintbarthelemyFullPolygon,
  // saintkittsandnevisFullPolygon,
  // saintluciaFullPolygon,
  // saintpierreFullPolygon,
  // saintvincentandthegrenadinesFullPolygon,
  // saotomeandprincipeFullPolygon,
  // sauduarabiaFullPolygon,
  // scotlandFullPolygon,
  // seneganFullPolygon,
  // serbiaFullPolygon,
  // sierraleoneFullPolygon,
  // sinteustatiusandsabaFullPolygon,
  // sintmaartenFullPolygon,

  // slovakiaFullPolygon,
  // somaliaFullPolygon,
  // southgeorgiaFullPolygon,
  // southkoreaFullPolygon,
  // southsudanFullPolygon,
  // spainFullPolygon,
  // srilankaFullPolygon,
  // surinameFullPolygon,
  // swedenFullPolygon,
  // switzerlandFullPolygon,
  // slovakiaFullPolygon,
  // sydanFullPolygon,
  // syriaFullPolygon,
  // taiwanFullPolygon,
  // tajikistanFullPolygon,
  // tanzaniaFullPolygon,
  // thailandFullPolygon,
  // togoFullPolygon,
  // trinidadandtobagoFullPolygon,
  // turkeyFullPolygon,
  // turkmenistanFullPolygon,
  // turksandcaicosFullPolygon,

  // tynisFullPolygon,
  // uaeFullPolygon,
  // ugandaFullPolygon,
  // ukraineFullPolygon,
  // unitedstatesFullPoygon,
  // uruguayFullPolygon,
  // uzbekistanFullPolygon,
  // venezuelaFullPolygon,
  // vietnamFullPolygon,
  // virginislandsUKFullPolygon,
  // yemenFullPolygon,
  // zambiaFullPolygon,
  // zimbabweFullPolygon,
  // latviaFullPolygon,
  // sloveniaFullPolygon,
  // newzealandFullPolygon,

  // bosniaandherzegovinaFullPolygon,
  // kosovoFullPolygon,
  // isleofmanFullPolygon,
  // luxembourgFullPolygon,
  // nakhichevanautonomousrepublicFullPolygon,
  // burundiFullPolygon,
  // vanuatuFullPolygon,
  // djiboutiFullPolygon,
  // cyprusFullPolygon,
  // gazaFullPolygon,

  // azerbaijanFullPolygon,
  // faroeislandsFullPolygon,
  // walesFullPolygon,
  // unitedkingdomsovereignbaseareasFullPolygon,
  // northernirelandFullPolygon,
  // elsalvadorFullPolygon,
  // fijiFullPolygon,
  // capeverdeFullPolygon,
  // maltaFullPolygon,
  // bahrainFullPolygon,
  // maldivesFullPolygon,
  // ] as any;

  type activeCitiesType = {
    position: string;
    name: string;
    population: string;
  };
  const [activeCity, setActiveCity] = useState<activeCitiesType | null>(null);

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };

  const [mapState, setMapState] = useState<MapStateType>({
    initialZoom: 3,
    targetZoom: 3,
  });

  return (
    <div className="mainmap__wrapper" onClick={() => navigateHandler()}>
      <MapContainer
        center={[49.0238, 11.2292]}
        minZoom={window.innerWidth <= 768 ? 2 : 3}
        zoom={mapState.initialZoom}
        maxZoom={18}
        maxBounds={L.latLngBounds(L.latLng(-90, -170), L.latLng(90, 190))}
        maxBoundsViscosity={1}
        className="mainmap"
      >
        <ZoomLogger setMapState={setMapState} />
        {/* main */}
        {isDarkTheme ? (
          mapState.targetZoom >= 8 ? (
            <TileLayer url="https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" />
          ) : (
            <TileLayer url="https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default//GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg" />
          )
        ) : (
          // main
          <TileLayer url="http://mt0.google.com/vt/lyrs=s,h&hl=en&x={x}&y={y}&z={z}&s=Ga" />
          // <TileLayer url="https://api.mapbox.com/styles/v1/mapooze/clhrs78wc002j01pnghet7uvg/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwb296ZSIsImEiOiJjbGh5d3lxZWswMDU4M251bmx0MHd4MnFwIn0.3LdPAXjgyAYXvYQKu5mtDA" />

          // prod
          // <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        )}
        {dbbase.map((_: any, idx: number) => (
          <GeoJSON
            key={idx}
            data={dbbase[idx]}
            style={() => ({
              color: "#29ABE2",
              weight: mapState.targetZoom >= 8 ? 3 : 2,
              opacity: 1,
              fillOpacity: 0.3,
              // fillOpacity: mapState.targetZoom >= 8 ? 0.2 : 0.3,
            })}
          />
        ))}
        {activeCity && (
          // @ts-ignore
          <Popup position={activeCity.position}>
            <div>
              попап с будущими данными
              <h2>{activeCity.name}</h2>
              <p>Население: {activeCity.population}</p>
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
};
