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
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.InflateException;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.MimeTypeMap;
import android.webkit.URLUtil;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;

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
import com.google.android.gms.tasks.OnSuccessListener;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.zip.Inflater;

public class MapFragment extends Fragment implements OnMapReadyCallback {
    View view;
    private static final String FILE_PATH = "Tiles";
//    private static final String TILE9_URL = "https://tileservice.charts.noaa.gov/mbtiles/50000_1/MBTILES_08.mbtiles";
        private static final String TILE9_URL = "https://s3.us-east-2.amazonaws.com/lokahimapfiles/MBTILES_09.mbtiles";
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
    SupportMapFragment supportMapFragment;



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

    @Override
    public void onDestroy() {
        super.onDestroy();
        requireActivity().unregisterReceiver(onDownloadComplete);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup parent, Bundle savedInstanceState) {
        super.onCreateView(inflater, parent, savedInstanceState);
        view = inflater.inflate(R.layout.activity_map, parent, false);
        return view;
    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        Log.i("ViewState", "view created");
        locationProvider = LocationServices.getFusedLocationProviderClient(requireActivity());
        etLat = view.findViewById(R.id.etLat);
        etLng = view.findViewById(R.id.etLng);
        FragmentManager fm = requireActivity().getSupportFragmentManager();/// getChildFragmentManager();
//        supportMapFragment = (SupportMapFragment) fm.findFragmentById(R.id.map);
        supportMapFragment = SupportMapFragment.newInstance();
        fm.beginTransaction().replace(R.id.map, supportMapFragment).commit();
        supportMapFragment.getMapAsync(this);
        requestPermissions();
        requireActivity().registerReceiver(onDownloadComplete, new IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE));

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


    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
    }

    @Override
    public void onResume() {
        super.onResume();
        Log.i("ViewState", "view resume");

    }

    @Override
    public void onMapReady(@NonNull GoogleMap googleMap) {
        mMap = googleMap;
        Log.i("ViewState", "view in map");
        if (currentLat != 0.0 && currentLng != 0.0) {
            addMarker(new LatLng(currentLat, currentLng));
        }
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
            Log.i("ViewState","marker called");
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
            Log.i("TILES", "file is not null " + file);
            TileProvider tile = new ExpandedMBTilesTileProvider(file, 256, 256);
            if (mMap != null) {
                Log.i("TILES", "set tile called ");
                mMap.addTileOverlay(new TileOverlayOptions().tileProvider(tile));
            } else
                Log.i("TILES", "map is null ");
        } else
            Log.i("TILES", "file is null ");
    }


    private void requestPermissions() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M)
            if ((requireActivity().checkSelfPermission(Manifest.permission.READ_EXTERNAL_STORAGE)
                    != PackageManager.PERMISSION_GRANTED) && (requireActivity().checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE)
                    != PackageManager.PERMISSION_GRANTED)) {
                Log.i("PERMISSION", "no per");
                requestPermissions(new String[]{Manifest.permission.READ_EXTERNAL_STORAGE, Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION},
                        111);
            }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if ((requireActivity().checkSelfPermission(Manifest.permission.READ_EXTERNAL_STORAGE)
                    != PackageManager.PERMISSION_GRANTED) && (requireActivity().checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE)
                    != PackageManager.PERMISSION_GRANTED) && (requireActivity().checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION)
                    != PackageManager.PERMISSION_GRANTED) && (requireActivity().checkSelfPermission(Manifest.permission.ACCESS_COARSE_LOCATION)
                    != PackageManager.PERMISSION_GRANTED)) {
                requestPermissions(new String[]{Manifest.permission.READ_EXTERNAL_STORAGE, Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION},
                        111);
                // Should we show an explanation?
                if ((shouldShowRequestPermissionRationale(
                        Manifest.permission.READ_EXTERNAL_STORAGE)) && (shouldShowRequestPermissionRationale(
                        Manifest.permission.WRITE_EXTERNAL_STORAGE)) && (shouldShowRequestPermissionRationale(
                        Manifest.permission.ACCESS_FINE_LOCATION)) && (shouldShowRequestPermissionRationale(
                        Manifest.permission.ACCESS_COARSE_LOCATION))) {
                    // Explain to the user why we need to read the contacts
                    requestPermissions(new String[]{Manifest.permission.READ_EXTERNAL_STORAGE, Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION},
                            111);
                }

//                requestPermissions(new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},
//                        111);

                // MY_PERMISSIONS_REQUEST_READ_EXTERNAL_STORAGE is an
                // app-defined int constant that should be quite unique

                return;
            } else {
                downloadTileFile(TILE9_URL);
                locationProvider.getLastLocation().addOnSuccessListener(requireActivity(), new OnSuccessListener<Location>() {
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
        Log.i("Location", "in request");
        if (requestCode == 111) {
            Log.i("Location", "in request 111");
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                Log.i("Location", "in grant");
                downloadTileFile(TILE9_URL);
                locationProvider.getLastLocation().addOnSuccessListener(requireActivity(), new OnSuccessListener<Location>() {
                    @Override
                    public void onSuccess(Location location) {
                        // Got last known location. In some rare situations this can be null.
                        if (location != null) {
                            Log.i("Location", "succes:: after permissions " + location.getLatitude());
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
                Toast.makeText(requireActivity(), "Permission Denied..!", Toast.LENGTH_SHORT).show();
            }
        }
    }

    private long downloadID;

    private void downloadTileFile(String url) {

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
        Toast.makeText(requireActivity(), "Marine map is downloading...", Toast.LENGTH_LONG).show();
        request.setDestinationInExternalPublicDir(DIRECTORY_DOWNLOADS, File.separator + FILE_PATH + File.separator + nameOfFile);
        DownloadManager downloadManager = (DownloadManager) requireActivity().getSystemService(Context.DOWNLOAD_SERVICE);
        downloadID = downloadManager.enqueue(request);
    }
}
