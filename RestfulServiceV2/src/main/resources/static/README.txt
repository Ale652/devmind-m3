    /*3.2 :

    2 end-pointuri de tip GET, pentru interogarea API-ului
    2 end-pointuri de tip POST, pentru adaugarea de informatii
    2 end-pointuri de tip PUT, pentru editarea informatiilor
    1 end-point de tip DELETE, pentru stergerea unei resurse

* */

    /* 2 end-pointuri de tip GET, pentru interogarea API-ului*/

        -> in AttitudeQuaternionsController

    /* 2 end-pointuri de tip POST, pentru adaugarea de informatii*/

        -> in RootController
        -> in LunarJ2000PositionController

    /* 2 end-pointuri de tip PUT, pentru editarea informatiilor*/

        -> in CentroidCoordinatesController
        -> in DscovrJ2000PositionController

    /* 1 end-point de tip DELETE, pentru stergerea unei resurse*/

        -> in SunJ2000PositionController
