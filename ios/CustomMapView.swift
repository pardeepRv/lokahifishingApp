//
//  CustomMapView.swift
//  lokahifishinglatest
//
//  Created by user on 17/01/22.
//

import UIKit
import MapKit
import Alamofire
import CoreLocation

class CustomMapView: UIView,UITextFieldDelegate, MKMapViewDelegate,CLLocationManagerDelegate {
    @IBOutlet weak var ProgressLabel: UILabel!
    let locationManager = CLLocationManager()
  var isLoactionAdded = false
  var isfirst = false
    @IBOutlet weak var txtLong: UITextField!
    @IBOutlet weak var txtlati: UITextField!
    @IBOutlet weak var mapView: MKMapView!
    @IBOutlet var contentView: UIView!
 
    
    var filePath = URL(string: "https://s3.us-east-2.amazonaws.com/lokahimapfiles/MBTILES_09.mbtiles")!
    
    
  override init(frame: CGRect) {
    super.init(frame: UIScreen.main.bounds)
      commonInit()
    addDoneButtonOnKeyboard()
      setupUI()
  }
  
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
    commonInit()
  }
  
 
  func setupUI()
  {
      // For use in foreground
      self.locationManager.requestWhenInUseAuthorization()

      if CLLocationManager.locationServicesEnabled() {
          locationManager.delegate = self
          locationManager.desiredAccuracy = kCLLocationAccuracyNearestTenMeters
          locationManager.startUpdatingLocation()
      }

    let longTapGesture = UILongPressGestureRecognizer(target: self, action: #selector(longTap))
    mapView.addGestureRecognizer(longTapGesture)
    
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
           mapView.addOverlay(mbtilesOverlay as! MKOverlay)
         }
       }
    
  }
    @objc func longTap(sender: UIGestureRecognizer){
      print("long tap")
        if sender.state == .began && isLoactionAdded == false {
          print("Enter long tap")
        self.isLoactionAdded = true
        let locationInView = sender.location(in: mapView)
        let locationOnMap = mapView.convert(locationInView, toCoordinateFrom: mapView)
        print("locationOnMap: ",locationOnMap)
          isfirst = true
          addAnnotation(location: locationOnMap)
          
        }
    }
    
    
    
  func addAnnotation(location: CLLocationCoordinate2D){
           let annotation = MKPointAnnotation()
            annotation.coordinate = location
            annotation.title = "Fish catch location"
            self.mapView.addAnnotation(annotation)
  }
    
    
    
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
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
      if let locValue:CLLocationCoordinate2D = manager.location?.coordinate
      {
        txtlati.text = String(format: "%.4f",locValue.latitude)
        txtLong.text = String(format: "%.4f",locValue.longitude)
        
        print("locations =  \(txtlati.text ),\(txtLong.text)")
     
        let annotation = MKPointAnnotation()
      annotation.coordinate = locValue
      annotation.title = "Current Location"
      self.mapView.addAnnotation(annotation)
      locationManager.stopUpdatingLocation()
       }
    }
  func addDoneButtonOnKeyboard()
      {
          let doneToolbar: UIToolbar = UIToolbar(frame: CGRect.init(x: 0, y: 0, width: UIScreen.main.bounds.width, height: 50))
          doneToolbar.barStyle = .default

          let flexSpace = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: nil, action: nil)
          let done: UIBarButtonItem = UIBarButtonItem(title: "Done", style: .done, target: self, action: #selector(self.doneButtonAction))

          let items = [flexSpace, done]
          doneToolbar.items = items
          doneToolbar.sizeToFit()

          txtlati.inputAccessoryView = doneToolbar
          txtLong.inputAccessoryView = doneToolbar

      }

      @objc func doneButtonAction()
      {
        txtlati.resignFirstResponder()
        txtLong.resignFirstResponder()
      }
  func textFieldDidBeginEditing(_ textField: UITextField) {
    print("Sattdc")

    //    guard let lati = NumberFormatter().number(from:"37.0902")?.doubleValue , let long =  NumberFormatter().number(from: "95.7129")?.doubleValue else { return  }
        
   guard let lati = NumberFormatter().number(from:txtlati.text ?? "")?.doubleValue , let long =  NumberFormatter().number(from: txtLong.text ?? "")?.doubleValue else { return  }
    let cutomCordinates = CLLocationCoordinate2D(latitude: lati, longitude: long)
    print("CustomCord : ",cutomCordinates)
    //zoomAndCenter(on:cutomCordinates, zoom: 5)
    addAnnotation(location: cutomCordinates)
  }
  func zoomAndCenter(on centerCoordinate: CLLocationCoordinate2D, zoom: Double) {
      var span: MKCoordinateSpan = mapView.region.span
      span.latitudeDelta *= zoom
      span.longitudeDelta *= zoom
      let region: MKCoordinateRegion = MKCoordinateRegion(center: centerCoordinate, span: span)
      mapView.setRegion(region, animated: true)
  }
  
  
  
  
    
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
                 
                 self.ProgressLabel.isHidden = false
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
                     self.mapView.addOverlay(mbtilesOverlay as! MKOverlay)
                     
                     
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
  
  
  private func commonInit() {
    // load the nib file
    Bundle.main.loadNibNamed("CustomMapView", owner: self, options: nil)
    addSubview(contentView)
    contentView.frame = bounds
    contentView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
  }
}

