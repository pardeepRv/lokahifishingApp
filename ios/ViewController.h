// The MIT License (MIT)
// Copyright (c) 2016 NOAA

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the
// Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
// and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
// ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

#import <UIKit/UIKit.h>
#import <MapKit/MapKit.h>
#import "MBXMBTilesOverlay.h"


@interface ViewController : UIViewController <MKMapViewDelegate, UITableViewDelegate, UITableViewDataSource, NSURLSessionDownloadDelegate, NSURLSessionDataDelegate, NSURLSessionTaskDelegate>

// For the menu size
@property (weak, nonatomic) IBOutlet UIView *content;

@property (weak, nonatomic) IBOutlet MKMapView *mapView;

@property (strong, nonatomic) IBOutlet UITableView *tableView;

// Paths for files in the documents directory
@property (nonatomic,retain) NSMutableDictionary *contents;

// Progress view components
@property (strong, nonatomic) IBOutlet UIProgressView *progressView;
@property (strong, nonatomic) NSURLConnection *connectionManager;
@property (strong, nonatomic) NSMutableData *downloadedMutableData;
@property (strong, nonatomic) NSURLResponse *urlResponse;

// Data dictionaries and arrays used for parsing and to display in tableview
//@property (nonatomic,retain) NSMutableDictionary *dict;
//@property (nonatomic, retain) NSMutableDictionary *data;
@property (nonatomic, retain) NSArray *sortedNameArray;
@property (nonatomic, retain) NSArray *statusArray;

// This is for the percentage display on the UIAlertController
@property (nonatomic, strong) IBOutlet UILabel *lbl_download;
@property (nonatomic, strong) IBOutlet UILabel *lbl_write;


// Progress bar properties
@property (nonatomic) NSUInteger totalBytes;
@property (nonatomic) NSUInteger receivedBytes;

// This is the array that is holding the position of the cells that have been checked
@property (retain, nonatomic) NSMutableArray *marks;
@property (retain, nonatomic) NSMutableArray *checkedArray;


@property (strong, nonatomic) NSFileHandle *file;


-(void)DownloadFile:(MKMapView *)map;
-(void)TapButton:(NSIndexPath *)indexPath;
-(void)LoadData;
@end

