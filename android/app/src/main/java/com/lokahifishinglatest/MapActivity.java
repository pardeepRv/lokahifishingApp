package lokahi.com.lokahi;

import static android.os.Environment.DIRECTORY_DOWNLOADS;

import android.Manifest;
import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.location.Location;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.webkit.MimeTypeMap;
import android.webkit.URLUtil;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.maps.CameraUpdate;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;
import com.google.android.gms.maps.model.TileOverlayOptions;
import com.google.android.gms.maps.model.TileProvider;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;

import java.io.File;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class MapActivity extends AppCompatActivity implements OnMapReadyCallback {
//    MapView mMapView = null;

    private static final String FILE_PATH = "Tiles";
    private static final String TILE9_URL = "https://tileservice.charts.noaa.gov/mbtiles/50000_1/MBTILES_08.mbtiles";
//    private static final String TILE9_URL = "https://s3.us-east-2.amazonaws.com/lokahimapfiles/MBTILES_09.mbtiles";
//    MBTilesLayer[] layers = new MBTilesLayer[28];
//    ArcGISTiledMapServiceLayer mArcGISTiledMapServiceLayer;
    boolean mActiveNetwork;
    private GoogleMap mMap;
    private Boolean onMapClicked = false;
    private Double currentLat = 0.0;
    private Double currentLng = 0.0;
    private String[] mMbTilesNames;
    private String nameOfFile = "";
    private DownloadManager.Request request;
    private File file;
    private File downloadFile;
    private EditText etLat, etLng;
    private FusedLocationProviderClient locationProvider;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_map);
        locationProvider = LocationServices.getFusedLocationProviderClient(this);
        etLat = findViewById(R.id.etLat);
        etLng = findViewById(R.id.etLng);
//        mMapView = findViewById(R.id.map);
//        mMapView.getCenter();
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
//        mMapView.(this);


//        initMap();
        // enable map to wrap around
//        mMapView.enableWrapAround(true);

//        if (savedInstanceState != null) {
//            List layerState = (List) savedInstanceState.get("layerState");
//            if (layerState != null) {
//                for (int i = 0; i < layerState.size(); i++) {
//                    boolean selected = (boolean) layerState.get(i);
//                    if (selected) {
//                        MBTilesLayer layer = new ChartTileServiceLayer(Environment.getExternalStorageDirectory() +
//                                FILE_PATH + "/" + mMbTilesNames[i] + ".mbtiles",
//                                this.getBaseContext());
//                        mMapView.addLayer(layer);
//                        layers[i] = layer;
//                    }
//                }
//                Toast.makeText(this, "Restored " + layerState.size() + " layers", Toast.LENGTH_SHORT).show();
//            }
//        }

        requestPermissions();

        etLat.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                if (!onMapClicked) {
                    if (etLat.getText().toString().trim().isEmpty()) {
                        currentLat = 0.0;
                    } else {
                        currentLat = Double.valueOf(etLat.getText().toString().trim());
                    }

                    if (etLng.getText().toString().trim().isEmpty()) {
                        currentLng = 0.0;
                    } else {
                        currentLng = Double.valueOf(etLng.getText().toString().trim());
                    }
                    addMarker(new LatLng(currentLat, currentLng));
                } else
                    onMapClicked = false;
            }


            @Override
            public void afterTextChanged(Editable s) {

            }
        });

        etLng.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                if (!onMapClicked) {
                    if (etLat.getText().toString().trim().isEmpty()) {
                        currentLat = 0.0;
                    } else {
                        currentLat = Double.valueOf(etLat.getText().toString().trim());
                    }

                    if (etLng.getText().toString().trim().isEmpty()) {
                        currentLng = 0.0;
                    } else {
                        currentLng = Double.valueOf(etLng.getText().toString().trim());
                    }
                    addMarker(new LatLng(currentLat, currentLng));
                } else
                    onMapClicked = false;
            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });


        registerReceiver(onDownloadComplete, new IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE));

    }

    BroadcastReceiver onDownloadComplete = new BroadcastReceiver() {
        public void onReceive(Context ctxt, Intent intent) {
            Log.i("TILES", "in reciver");
            long id = intent.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID, -1);
            if (downloadID == id) {
                Log.i("TILES", "set tile called");
                setTile();
            }
            // your code
        }
    };

//    private void initMap() {
//        mActiveNetwork = isNetworkAvailable();
//        if (mActiveNetwork) {
//            mArcGISTiledMapServiceLayer = new ArcGISTiledMapServiceLayer(
////                    "https://tileservice.charts.noaa.gov/mbtiles/50000_1/MBTILES_08.mbtiles");
//                    "http://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer");
//            // Add tiled layer to MapView
//            mMapView.addLayer(mArcGISTiledMapServiceLayer);
//        } else {
//            Toast toast = Toast.makeText(this, R.string.offline_message, Toast.LENGTH_SHORT);
//            toast.show();
//        }
//
//
//        // Handle tap event to demo UTFGrid metadata retrieval
//        mMapView.setOnSingleTapListener(new OnSingleTapListener() {
//            private static final long serialVersionUID = 1L;
//
//            public void onSingleTap(float screenX, float screenY) {
//                if (MapTilePoint.mScaleMap.containsKey(mMapView.getScale())) {
//                    MBTilesLayer firstLayer = findFirstLayer();
//                    if (firstLayer != null) {
//                        TiledServiceLayer.TileInfo tileInfo = firstLayer.mTileInfo;
//                        MapTilePoint localMapTilePoint = new MapTilePoint(mMapView.toMapPoint(screenX, screenY), mMapView.getScale(), layers);
//                        try {
//                            String json = localMapTilePoint.getGridJson();
//                            Point screenPoint = new Point(Math.round(screenX), Math.round(screenY));
////                          create a map point from screen point
////
//
//
//                            android.graphics.Point point;
//                            point = new android.graphics.Point(Math.round(screenX), Math.round(screenY));
//
//                            // create an opaque orange (0xFFFF5733) point symbol with a blue (0xFF0063FF) outline symbol
//                            SimpleMarkerSymbol simpleMarkerSymbol = new SimpleMarkerSymbol(0xFFFF5733, 20, SimpleMarkerSymbol.STYLE.DIAMOND);
//
//                            SimpleLineSymbol blueOutlineSymbol = new SimpleLineSymbol(0xFFFF5733, 20, SimpleLineSymbol.STYLE.SOLID);
//                            simpleMarkerSymbol.setOutline(blueOutlineSymbol);
//
////                          format output
//                            Log.d("TAG MAP POINT", "Lat: " + String.format("%.4f", tileInfo.getOrigin().getX()) + ", Lon: " + String.format("%.4f", tileInfo.getOrigin().getX()));
//
//                            Toast.makeText(MapActivity.this, "/" + localMapTilePoint.getMapTile().getZ() + "/" + localMapTilePoint.getMapTile().getX() + "/" + localMapTilePoint.getMapTile().getY() + " (" + localMapTilePoint.getX() + ", " + localMapTilePoint.getX() + ") " + json, Toast.LENGTH_SHORT).show();
//                        } catch (Exception localException) {
//                            Log.e("MainActivity", "Error getting grid json", localException);
//                        }
//                    }
//                }
//            }
//        });
//
//        // When zooming in or out, make sure we 'snap' to a scale matching a zoom level.
//        mMapView.setOnZoomListener(new OnZoomListener() {
//            private static final long serialVersionUID = 1L;
//            double mInitialScale;
//
//            public void postAction(float param1, float param2, double param3) {
//                double scale = findNearestScale(this.mInitialScale, mMapView.getScale());
//                if (scale != mMapView.getScale()) {
//                    Log.i("MainActivity", "Snapping to scale: " + scale);
//                    mMapView.zoomToScale(mMapView.getCenter(), scale);
//                    return;
//                }
//                Log.i("MainActivity", "Already at nearest scale");
//            }
//
//            public void preAction(float param1, float param2, double param3) {
//                this.mInitialScale = mMapView.getScale();
//            }
//        });
//    }
//
//    @Override
//    public void onSaveInstanceState(Bundle outState) {
//        List layerState = new ArrayList<Boolean>();
//        for (int i = 0; i < layers.length; i++) {
//            if (layers[i] != null) {
//                layerState.add(true);
//            } else {
//                layerState.add(false);
//            }
//        }
//        outState.putSerializable("layerState", (Serializable) layerState);
//        super.onSaveInstanceState(outState);
//    }
//
//    private MBTilesLayer findFirstLayer() {
//        MBTilesLayer localMBTilesLayer = null;
//        int i = 0;
//        while (i < this.layers.length) {
//            if (this.layers[i] != null) {
//                localMBTilesLayer = this.layers[i];
//            }
//            i += 1;
//        }
//        return localMBTilesLayer;
//    }
//
//
//    private double findNearestScale(double initialScale, double currentScale) {
//        if (findFirstLayer() != null && findFirstLayer().getTileInfo() != null) {
//            double[] scales = findFirstLayer().getTileInfo().getScales();
//            int i = 0;
//            while (i < scales.length) {
//                if (i < scales.length - 1) {
//                    double d1 = scales[i];
//                    double d2 = scales[(i + 1)];
//                    Log.i("MainActivity", "scale1: " + d1);
//                    Log.i("MainActivity", "currentScale: " + currentScale);
//                    Log.i("MainActivity", "scale2: " + d2);
//                    if ((currentScale < d1) && (currentScale > d2)) {
//                        if (currentScale > initialScale) {
//                            return d1;
//                        }
//                        return d2;
//                    }
//                }
//                i += 1;
//            }
//        }
//        return currentScale;
//    }


    private boolean isNetworkAvailable() {
        ConnectivityManager connectivityManager = (ConnectivityManager) this.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo netInfo = connectivityManager.getActiveNetworkInfo();

        return netInfo != null && netInfo.isConnected();
    }

    private void requestPermissions() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if ((checkSelfPermission(Manifest.permission.READ_EXTERNAL_STORAGE)
                    != PackageManager.PERMISSION_GRANTED) && (checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE)
                    != PackageManager.PERMISSION_GRANTED) && (checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION)
                    != PackageManager.PERMISSION_GRANTED) && (checkSelfPermission(Manifest.permission.ACCESS_COARSE_LOCATION)
                    != PackageManager.PERMISSION_GRANTED)) {

                // Should we show an explanation?
                if ((shouldShowRequestPermissionRationale(
                        Manifest.permission.READ_EXTERNAL_STORAGE)) && (shouldShowRequestPermissionRationale(
                        Manifest.permission.WRITE_EXTERNAL_STORAGE)) && (shouldShowRequestPermissionRationale(
                        Manifest.permission.ACCESS_FINE_LOCATION)) && (shouldShowRequestPermissionRationale(
                        Manifest.permission.ACCESS_COARSE_LOCATION))) {
                    // Explain to the user why we need to read the contacts
                }

                requestPermissions(new String[]{Manifest.permission.READ_EXTERNAL_STORAGE, Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION},
                        111);
//                requestPermissions(new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},
//                        111);

                // MY_PERMISSIONS_REQUEST_READ_EXTERNAL_STORAGE is an
                // app-defined int constant that should be quite unique

                return;
            } else {
                downloadTileFile(TILE9_URL);
                locationProvider.getLastLocation().addOnSuccessListener(this, new OnSuccessListener<Location>() {
                    @Override
                    public void onSuccess(Location location) {
                        // Got last known location. In some rare situations this can be null.
                        if (location != null) {
                            Log.i("Location", "succes:: " + location.getLatitude());
                            // Logic to handle location object
                            etLat.setText(String.valueOf(location.getLatitude()));
                            etLng.setText(String.valueOf(location.getLongitude()));
                            currentLat = location.getLatitude();
                            currentLng = location.getLongitude();
                            addMarker(new LatLng(currentLat, currentLng));
                        }
                    }
                });

            }
        }
    }

    @Override
    public void onRequestPermissionsResult(final int requestCode, @NonNull final String[] permissions, @NonNull final int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == 111) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                downloadTileFile(TILE9_URL);
                locationProvider.getLastLocation().addOnSuccessListener(this, new OnSuccessListener<Location>() {
                    @Override
                    public void onSuccess(Location location) {
                        // Got last known location. In some rare situations this can be null.
                        if (location != null) {
                            etLat.setText(String.valueOf(location.getLatitude()));
                            etLng.setText(String.valueOf(location.getLongitude()));
                            currentLat = location.getLatitude();
                            currentLng = location.getLongitude();
                            addMarker(new LatLng(currentLat, currentLng));
                            // Logic to handle location object
                        }
                    }
                });
            } else {
                Toast.makeText(this, "Permission Denied..!", Toast.LENGTH_SHORT).show();
            }
        }
    }

    private long downloadID;

    private void downloadTileFile(String url) {
        Toast.makeText(this, "Marine map is downloading...", Toast.LENGTH_SHORT).show();
        request = new DownloadManager.Request(Uri.parse(url));
        request.setTitle("Downloading MBTile...");  //set title for notification in status_bar
        request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);  //flag for if you want to show notification in status or not

        //String nameOfFile = "YourFileName.pdf";    //if you want to give file_name manually
        nameOfFile = URLUtil.guessFileName(url, null, MimeTypeMap.getFileExtensionFromUrl(url)); //fetching name of file and type from server

        downloadFile = new File(Environment.getExternalStorageDirectory() + File.separator + DIRECTORY_DOWNLOADS + File.separator + FILE_PATH);       // location, where to download file in external directory

        Log.d("Path Data_1", "" + downloadFile.getPath());
        file = new File(downloadFile.getPath() + File.separator + nameOfFile);

        Log.d("Path Data_1", "" + file.getPath());


        // location, where to download file in external directory
        if (downloadFile.exists() && file.exists() && file.isFile()) {
            try {
//                MBTilesLayer layer = new ChartTileServiceLayer(file.getPath(),
//                        this.getBaseContext());
//
//
//                layers[0] = layer;
                Log.i("TILES", "exist and set tile called");
                setTile();
            } catch (Exception e) {
                file.delete();
                startDownloadFile();
                Log.d("Path Data_2", "" + downloadFile.getPath());
            }
            Log.d("Path Data_3", "" + downloadFile.getPath());
        } else {
            Log.d("Path Data_4", "" + downloadFile.getPath());
            downloadFile.mkdirs();
            startDownloadFile();
        }

    }

    private void startDownloadFile() {
        request.setDestinationInExternalPublicDir(DIRECTORY_DOWNLOADS, File.separator + FILE_PATH + File.separator + nameOfFile);
        DownloadManager downloadManager = (DownloadManager) getSystemService(Context.DOWNLOAD_SERVICE);
        downloadID = downloadManager.enqueue(request);
    }

    @Override
    public void onMapReady(@NonNull GoogleMap googleMap) {
        mMap = googleMap;

        mMap.setOnMapClickListener(new GoogleMap.OnMapClickListener() {
            @Override
            public void onMapClick(@NonNull LatLng latLng) {
                onMapClicked = true;
                currentLat = latLng.latitude;
                currentLng = latLng.longitude;
                etLat.setText(String.valueOf(currentLat));
                etLng.setText(String.valueOf(currentLng));
                addMarker(latLng);
            }
        });



    }

    private void addMarker(LatLng latLng) {
        if (mMap != null) {
            mMap.setMyLocationEnabled(true);
            mMap.clear();
            mMap.addMarker(new MarkerOptions().position(latLng));
            CameraUpdate cm = CameraUpdateFactory.newLatLngZoom(latLng, mMap.getCameraPosition().zoom);
            mMap.animateCamera(cm);
            setTile();
        }
    }

    private void setTile() {
//        File file = new File(
//                Environment.getExternalStorageDirectory()
//                        .toString() + File.separator + Environment.DIRECTORY_DOWNLOADS + File.separator + FILE_PATH+File.separator + nameOfFile);
        if (file != null) {
            TileProvider tile = new ExpandedMBTilesTileProvider(file, 256, 256);
            if (mMap != null)
                mMap.addTileOverlay(new TileOverlayOptions().tileProvider(tile));
        }
    }


//    private void buildGoogleApiClient() {
//        mGoogleApiClient = new GoogleApiClient
//                .Builder(this)
//                .addApi(Places.GEO_DATA_API)
//                .addApi(Places.PLACE_DETECTION_API)
//                .enableAutoManage(this, this)
//                .build();
//    }
}