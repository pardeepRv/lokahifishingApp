import UIKit
import MapKit
import Alamofire
import Photos

class SwitchView: UIView, MKMapViewDelegate {
  
  /*@objc var isOn: Bool = false  {
    didSet {
          button.backgroundColor = isOn ? .yellow : .black
          button.setTitle(String(describing: isOn ? "I am ON" : "I am OFF"), for: .normal)
     }
  }*/
  override init(frame: CGRect) {
    super.init(frame: frame)
    
    self.addSubview(AppleMap)
   self.addSubview(ProgressLabel)
    
  /*  PHPhotoLibrary.requestAuthorization({
           (newStatus) in
             if newStatus ==  PHAuthorizationStatus.authorized {
              /* do stuff here */
               print("authorized")
        }
    })*/
 
    let documentsUrl = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first
      
      
     if let fileURL = documentsUrl?.appendingPathComponent(self.filePath.lastPathComponent)
    {
       if FileManager.default.fileExists(atPath: fileURL.path) == false
    {
    
   DownloadMbTiles()
    }
       else
       {
         var mbtilesOverlay = MBXMBTilesOverlay()
            
            mbtilesOverlay = MBXMBTilesOverlay(mbTilesPath:fileURL.path)
         AppleMap.addOverlay(mbtilesOverlay as! MKOverlay)
       }
     }
  
    
  }
  required init?(coder aDecoder: NSCoder) {
    fatalError("init has not been implemented")
  }
  
  
 /* @objc func methodOfReceivedNotification(notification: Notification) {
   
  //  print(notification.userInfo)
    
    if let Progress = notification.userInfo?["Progress"] as? String
    {
      if Progress == "100"
      {
        ProgressLabel.text = "Hawai Map Downloaded"
      }
      else
      {
      ProgressLabel.text = "Downloading: \(Progress)"
      }
      }
    
    
  }*/
 
  var ProgressLabel: UILabel = {
    let progresslbl = UILabel()
    let width:CGFloat = UIScreen.main.bounds.width
    
    progresslbl.font = UIFont.systemFont(ofSize: 20)
    progresslbl.frame =  CGRect(x: 0, y: 0, width: width, height: 40)
    progresslbl.textColor = .black
    progresslbl.textAlignment = .center
    return progresslbl
  }()
  
  var filePath = URL(string: "https://s3.us-east-2.amazonaws.com/lokahimapfiles/MBTILES_09.mbtiles")!
  
  
  
  lazy var AppleMap: MKMapView = {
   let mapView = MKMapView()
    let width:CGFloat = UIScreen.main.bounds.width
      mapView.frame = CGRect(x: 0, y: 0,  width:width,
                             height:280)
      mapView.mapType = MKMapType.standard
   
      mapView.isZoomEnabled = true
     mapView.isScrollEnabled = true
     mapView.isUserInteractionEnabled = true
     mapView.delegate = self

    
    
    //obj.downloadFile(mapView)
   /*
    let annotation = MKPointAnnotation()
    annotation.title = "London"
    annotation.coordinate = CLLocationCoordinate2D(latitude: CLLocationDegrees(17.695930),
                                                    longitude: CLLocationDegrees(146.099486))
    mapView.addAnnotation(annotation)
*/
    
    
    //let indexPath = IndexPath(row: 8, section: 0)

   // obj.tapButton(indexPath)
    
    
      return mapView
  }()
  
  func mapView(_ mapView: MKMapView, rendererFor overlay: MKOverlay) -> MKOverlayRenderer {
      if overlay is MKTileOverlay {
          var r: MKTileOverlayRenderer? = nil
          if let overlay = overlay as? MKTileOverlay {
              r = MKTileOverlayRenderer(tileOverlay: overlay)
          }
          return r!
      }
      return MKOverlayRenderer()
  }
  
  
  
  
  
  /*
  func addapple() {
    let mapView = MKMapView()
       mapView.frame = CGRect(x: 0, y: 0, width: 150, height: 250)
       mapView.mapType = MKMapType.standard
    mapView.delegate = self
       mapView.isZoomEnabled = true
      mapView.isScrollEnabled = true
    mapView.isUserInteractionEnabled = true
  //  mapView.backgroundColor = .red

    let obj = MBXMBTilesOverlay()
    
    var filePath = Bundle.main.url(forResource: "MBTILES_08", withExtension: "mbtiles")
    print("path:",filePath?.absoluteString)
    var mbtilesOverlay: MBXMBTilesOverlay?
    mbtilesOverlay = MBXMBTilesOverlay(mbTilesPath:filePath?.absoluteString)
    print("mbtilesOverlay:",mbtilesOverlay)
  mapView.addOverlay(mbtilesOverlay as! MKOverlay)
    self.addSubview(mapView)
  }
  
*/
  
  let destination: DownloadRequest.Destination = { _, _ in
    let documentsURL = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first!
      let fileURL = documentsURL.appendingPathComponent("MBTILES_09.mbtiles")

              return (fileURL, [.removePreviousFile, .createIntermediateDirectories])
      }

  
   func DownloadMbTiles() {
     //"https://s3.us-east-2.amazonaws.com/lokahimapfiles/MBTILES_09.mbtiles"
     
     //https://tileservice.charts.noaa.gov/mbtiles/50000_1/MBTILES_08.mbtiles
     
     AF.download(filePath.absoluteString, to: destination )
             .downloadProgress { progress in

                                   let completed: Float = Float(progress.completedUnitCount)
                                      let total: Float = Float(progress.totalUnitCount)
                                    //  self.progressView.progress = (completed/total)
              
               let FinalPer = String(format: "%.1f",(completed/total)*100)
               print("Downloading: \(FinalPer) %")
                 self.ProgressLabel.text = "Downloading: \(FinalPer) %"
              
               
               
               
               
              // float percentage = ((totalBytesWritten / (totalBytesExpectedToWrite * 1.0f) * 100));
               
             }.responseData { response in
             
              
               self.ProgressLabel.text = "Download Completed"
               DispatchQueue.main.asyncAfter(deadline: .now() + 2.0) {
                 self.ProgressLabel.isHidden = true
               }
               let documentsUrl = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first

               guard let fileURL = documentsUrl?.appendingPathComponent(self.filePath.lastPathComponent) else{
                 return
               }
             
               switch response.result {
               case .success(let data):
                 do{
                   try data.write(to: fileURL)
                   
                   var mbtilesOverlay = MBXMBTilesOverlay()
                      
                      mbtilesOverlay = MBXMBTilesOverlay(mbTilesPath:fileURL.path)
                   self.AppleMap.addOverlay(mbtilesOverlay as! MKOverlay)
                   
                   
                   print("File:",fileURL.path)
                 }catch(let err)
                 {
                   print(err.localizedDescription)
                 }
               case .failure(let err):
                 
                 print(err.localizedDescription)
                 
               }
               
               
               print("Finish")
             }
     
   
     
    
     
  
}
  
  
  
  
  
  
  
}
