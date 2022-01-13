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

#import "ViewController.h"
#import "MBXMBTilesOverlay.h"
#import "Reachability.h"



@interface ViewController (){
    NSURLSessionDownloadTask *download;
    
}
@property (strong, nonatomic) NSURLSession *backgroundSession;
@property (strong, nonatomic) UIAlertController *alert2;
@property (strong, nonatomic) UIAlertController *alert;


@end

@implementation ViewController{
    
    NSString *selectedTileset;
    NSString *downloadUrl1;
    NSString *filename;
    NSDictionary *mbtilesDict;
    NSURL *mbFileurl;
    NSString *mbName;
    NSString *mbPath;
    NSString *mbtilesPath;
  dispatch_queue_t downloadQueue;
    // Array to loop through
    NSObject *overlays [26];
    
}

@synthesize content;
@synthesize tableView;
@synthesize title;
@synthesize contents;


#pragma - Managing the View

- (void)viewDidLoad {
    [super viewDidLoad];
    
}
//{
//    // List contents of Documents Directory just to check
//    NSURL *documentsURL = [[[NSFileManager defaultManager] URLsForDirectory:NSDocumentDirectory inDomains:NSUserDomainMask] lastObject];
//
//    NSArray *directoryContents = [[NSFileManager defaultManager]contentsOfDirectoryAtURL:documentsURL includingPropertiesForKeys:nil options:NSDirectoryEnumerationSkipsHiddenFiles error:nil];
//
//    NSLog(@"%@", [contents description]);
//
//    // Background connection delegate configuration
//    NSURLSessionConfiguration *backgroundConfigurationObject = [NSURLSessionConfiguration backgroundSessionConfigurationWithIdentifier:@"myBackgroundSessionIdentifier"];
//
//    // Background download thread instance method
//    self.backgroundSession = [NSURLSession sessionWithConfiguration:backgroundConfigurationObject delegate:self delegateQueue:[NSOperationQueue mainQueue]];
//
//    // Progress View instance
//    [self.progressView setProgress:0 animated:NO];
//
//    // Search to find the path of the Converted.plist in the documents directory
//    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
//    NSString *documentsDirectory = [paths objectAtIndex:0];
//    NSString *plistPath = [documentsDirectory stringByAppendingPathComponent:@"Converted.plist"];
//    NSFileManager *fileManager = [NSFileManager defaultManager];
//
//    // TODO: Confirm that this code is necessary
//    if (![fileManager fileExistsAtPath: plistPath]) {
//
//        plistPath = [documentsDirectory stringByAppendingPathComponent: [NSString stringWithFormat:@"Converted.plist"] ];
//    }
//
//    NSMutableDictionary *plistData;
//
//    if ([fileManager fileExistsAtPath: plistPath]) {
//
//        plistData = [[NSMutableDictionary alloc] initWithContentsOfFile: plistPath];
//    } else {
//
//        // If the file doesn’t exist, create an empty dictionary
//        plistData = [[NSMutableDictionary alloc] init];
//    }
//
//    // Parse the dictionary that is created from the contents of the plist
//    NSMutableDictionary* quilted_tilesets = [plistData objectForKey:@"quilted_tilesets"];
//
//
//    // Array for storing statuses of each mbtiles
//    NSMutableArray *mbNameArr = [[NSMutableArray alloc] init];
//    self.sortedNameArray = [[NSArray alloc] init];
//
//    // Declare String status Variable to be added to the plist
//    NSString *statusVar = [[NSString alloc] init];
//
//    // Add names of mbtiles dictionaries to an array
//    for (id key in [quilted_tilesets allKeys]) {
//        id value = [quilted_tilesets objectForKey:key];
//        if ([value isKindOfClass:[NSMutableDictionary class]]) {
//
//            NSDictionary* mbtilesDict = [quilted_tilesets objectForKey:key];
//
//            statusVar = [mbtilesDict objectForKey:@"status"];
//            [mbNameArr addObject:key];
//
//            NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
//            NSString *documentsDirectory = [paths objectAtIndex:0];
//
//            // Log for tracking which mbtiles have been installed
//            NSString *filename = [NSString stringWithFormat:@"%@.mbtiles", key];
//            NSString* mbtilePath = [documentsDirectory stringByAppendingPathComponent:filename];
//            BOOL fileExists1 = [[NSFileManager defaultManager] fileExistsAtPath:mbtilePath];
//
//            if (fileExists1 == 1)
//                NSLog(@"%@",key);
//        }
//    }
//
//    // Create an instance of sorted array of MBTiles Names
//    self.sortedNameArray = [mbNameArr sortedArrayUsingSelector:@selector(localizedCaseInsensitiveCompare:)];
//
//    NSMutableArray *statusArr = [[NSMutableArray alloc] init];
//    NSMutableDictionary *statDict = [[NSMutableDictionary alloc] init];
//
//    // Iterate through quilted_tileset dictionary using the sorted mbtiles names array to retrieve statuses assocated with each MBTiles dictionary key
//    for (NSString* key in _sortedNameArray) {
//        id value = [quilted_tilesets objectForKey:key];
//        if ([value isKindOfClass:[NSMutableDictionary class]]) {
//
//            NSDictionary* mbtilesDict = [quilted_tilesets objectForKey:key];
//
//            statusVar = [mbtilesDict objectForKey:@"status"];
//            [statDict objectForKey:key];
//            [statusArr addObject:statusVar];
//        }
//    }
//
//    // Create an instance of an array that contains
//    self.statusArray = [[NSArray alloc] initWithArray:statusArr];
//
//    // Render mapView
//    self.mapView.delegate = self;
//
//    // Sets the transparent color of the tableView
//    self.tableView.backgroundColor = [UIColor clearColor];
//
//
//    // Add gesture recognizers
//    UISwipeGestureRecognizer *swipeLeft = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(handleSwipeLeft:)];
//    [swipeLeft setDirection:UISwipeGestureRecognizerDirectionLeft];
//    [self.view addGestureRecognizer:swipeLeft];
//
//    UISwipeGestureRecognizer *swipeRight = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(handleSwipeRight:)];
//    [swipeRight setDirection:UISwipeGestureRecognizerDirectionRight];
//    [self.view addGestureRecognizer:swipeRight];
//
//    // This is used to keep track of the index of the cells that have been checkmarked.
//    _marks = [[NSMutableArray alloc] init];
//    for (int i = 0 ; i < [self.sortedNameArray count]; i++) {
//        [_marks addObject:@"NO"];
//    }
//
//
//}

/*
-(void)LoadData
{
    // List contents of Documents Directory just to check
    NSURL *documentsURL = [[[NSFileManager defaultManager] URLsForDirectory:NSDocumentDirectory inDomains:NSUserDomainMask] lastObject];
    
    NSArray *directoryContents = [[NSFileManager defaultManager]contentsOfDirectoryAtURL:documentsURL includingPropertiesForKeys:nil options:NSDirectoryEnumerationSkipsHiddenFiles error:nil];
    
    NSLog(@"%@", [contents description]);
    
    // Background connection delegate configuration
    NSURLSessionConfiguration *backgroundConfigurationObject = [NSURLSessionConfiguration backgroundSessionConfigurationWithIdentifier:@"myBackgroundSessionIdentifier"];
    
    // Background download thread instance method
    self.backgroundSession = [NSURLSession sessionWithConfiguration:backgroundConfigurationObject delegate:self delegateQueue:[NSOperationQueue mainQueue]];
    
    // Progress View instance
    [self.progressView setProgress:0 animated:NO];
    
    // Search to find the path of the Converted.plist in the documents directory
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsDirectory = [paths objectAtIndex:0];
    NSString *plistPath = [documentsDirectory stringByAppendingPathComponent:@"Converted.plist"];
    NSFileManager *fileManager = [NSFileManager defaultManager];
    
    // TODO: Confirm that this code is necessary
    if (![fileManager fileExistsAtPath: plistPath]) {
        
        plistPath = [documentsDirectory stringByAppendingPathComponent: [NSString stringWithFormat:@"Converted.plist"] ];
    }
    
    NSMutableDictionary *plistData;
    
    if ([fileManager fileExistsAtPath: plistPath]) {
        
        plistData = [[NSMutableDictionary alloc] initWithContentsOfFile: plistPath];
    } else {
        
        // If the file doesn’t exist, create an empty dictionary
        plistData = [[NSMutableDictionary alloc] init];
    }
    
    // Parse the dictionary that is created from the contents of the plist
    NSMutableDictionary* quilted_tilesets = [plistData objectForKey:@"quilted_tilesets"];
    
    
    // Array for storing statuses of each mbtiles
    NSMutableArray *mbNameArr = [[NSMutableArray alloc] init];
    self.sortedNameArray = [[NSArray alloc] init];
    
    // Declare String status Variable to be added to the plist
    NSString *statusVar = [[NSString alloc] init];
    
    // Add names of mbtiles dictionaries to an array
    for (id key in [quilted_tilesets allKeys]) {
        id value = [quilted_tilesets objectForKey:key];
        if ([value isKindOfClass:[NSMutableDictionary class]]) {
            
            NSDictionary* mbtilesDict = [quilted_tilesets objectForKey:key];
            
            statusVar = [mbtilesDict objectForKey:@"status"];
            [mbNameArr addObject:key];
            
            NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
            NSString *documentsDirectory = [paths objectAtIndex:0];
            
            // Log for tracking which mbtiles have been installed
            NSString *filename = [NSString stringWithFormat:@"%@.mbtiles", key];
            NSString* mbtilePath = [documentsDirectory stringByAppendingPathComponent:filename];
            BOOL fileExists1 = [[NSFileManager defaultManager] fileExistsAtPath:mbtilePath];
            
            if (fileExists1 == 1)
                NSLog(@"%@",key);
        }
    }
    
    // Create an instance of sorted array of MBTiles Names
    self.sortedNameArray = [mbNameArr sortedArrayUsingSelector:@selector(localizedCaseInsensitiveCompare:)];
    
    NSMutableArray *statusArr = [[NSMutableArray alloc] init];
    NSMutableDictionary *statDict = [[NSMutableDictionary alloc] init];
    
    // Iterate through quilted_tileset dictionary using the sorted mbtiles names array to retrieve statuses assocated with each MBTiles dictionary key
    for (NSString* key in _sortedNameArray) {
        id value = [quilted_tilesets objectForKey:key];
        if ([value isKindOfClass:[NSMutableDictionary class]]) {
            
            NSDictionary* mbtilesDict = [quilted_tilesets objectForKey:key];
            
            statusVar = [mbtilesDict objectForKey:@"status"];
            [statDict objectForKey:key];
            [statusArr addObject:statusVar];
        }
    }
    
    // Create an instance of an array that contains
    self.statusArray = [[NSArray alloc] initWithArray:statusArr];
    
    // Render mapView
    self.mapView.delegate = self;
    
    // Sets the transparent color of the tableView
    self.tableView.backgroundColor = [UIColor clearColor];
    
    
    // Add gesture recognizers
    UISwipeGestureRecognizer *swipeLeft = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(handleSwipeLeft:)];
    [swipeLeft setDirection:UISwipeGestureRecognizerDirectionLeft];
    [self.view addGestureRecognizer:swipeLeft];
    
    UISwipeGestureRecognizer *swipeRight = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(handleSwipeRight:)];
    [swipeRight setDirection:UISwipeGestureRecognizerDirectionRight];
    [self.view addGestureRecognizer:swipeRight];
    
    // This is used to keep track of the index of the cells that have been checkmarked.
    _marks = [[NSMutableArray alloc] init];
    for (int i = 0 ; i < [self.sortedNameArray count]; i++) {
        [_marks addObject:@"NO"];
    }

    
}*/
//MARK:-DownloadFile-
-(void)DownloadFile:(MKMapView *)map
    {
      mbFileurl = [NSURL URLWithString:@"https://s3.us-east-2.amazonaws.com/lokahimapfiles/MBTILES_09.mbtiles"];
     // NSOperationQueue  * queue = [NSOperationQueue mainQueue];
    
      
        NSLog(@"Connected to WIFI or DataPlan");
     // if (nil != download){
        //  [download cancel];
     //}
     
      //self.backgroundSession = nil;
      map.delegate = self;
      self.mapView = map;
        // TODO: Add add async for writing and downloading data
        NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
        NSString *documentsDirectory = [paths objectAtIndex:0];
      //  NSString *mbfileName = [NSString stringWithFormat:@"MBTILES_09.mbtiles"];
     
        NSString *mbfilePath = [NSString stringWithFormat:@"%@/%@", documentsDirectory,mbFileurl.lastPathComponent];
        
    
      // See if the mbtiles path file exists
      if ([[NSFileManager defaultManager] fileExistsAtPath:mbfilePath] == false)
      {
      
        NSLog(@"Checked");
        NSLog(@"%@", mbfilePath);
        
        // Background connection delegate configuration
        NSURLSessionConfiguration *backgroundConfigurationObject = [NSURLSessionConfiguration backgroundSessionConfigurationWithIdentifier:@"myBackgroundSessionIdentifier"];
        
        // Background download thread instance method
        //self.backgroundSession = [NSURLSession sessionWithConfiguration:backgroundConfigurationObject delegate:self delegateQueue:[NSOperationQueue mainQueue]];
        
        self.backgroundSession = [NSURLSession sessionWithConfiguration:backgroundConfigurationObject delegate:self delegateQueue:[NSOperationQueue mainQueue]];
        
       /* [self->_backgroundSession
                getTasksWithCompletionHandler:^(
                    NSArray<NSURLSessionDataTask *> *_Nonnull dataTasks,
                    NSArray<NSURLSessionUploadTask *> *_Nonnull uploadTasks,
                    NSArray<NSURLSessionDownloadTask *> *_Nonnull downloadTasks) {
        
        
        for (NSURLSessionTask *task in downloadTasks) {
                      [task cancel];
          [self->_backgroundSession invalidateAndCancel];
          NSLog(@"Download session %@ will be invalidate and cancel",
                            self->_backgroundSession);
                     
                  }
                    }];*/
        
        
        
        /*if (nil != downloadQueue){
          dispatch_suspend(downloadQueue);
        }
        else
        {
          NSLog(@"return");
         // return;
        }*/
        
        // Download dispatch queue
         downloadQueue = dispatch_queue_create("MBTiles Download", NULL);
        
        dispatch_async(downloadQueue, ^{
                  
       //   NSString *urlToDownload = @"https://s3.us-east-2.amazonaws.com/lokahimapfiles/MBTILES_09.mbtiles";
       //   NSString *urlToDownload = @"https://tileservice.charts.noaa.gov/mbtiles/50000_1/MBTILES_08.mbtiles";
          
        //  NSURL *url = [NSURL URLWithString:urlToDownload];
                
          
          
                NSURLRequest *request = [NSURLRequest requestWithURL:self->mbFileurl];
                NSURLConnection *connection = [[NSURLConnection alloc] initWithRequest:request delegate:self startImmediately:YES];
                
          
                //Start Download
          self->download = [self.backgroundSession downloadTaskWithURL:self->mbFileurl];
             [self->download resume];
//          NSLog(@"%ld",(long)[download state]);
//          if ([self->download state] == NSURLSessionTaskStateSuspended){
//
//          }
          
              //  NSData *urlData = [NSData dataWithContentsOfURL:self->mbFileurl];
                // store urldata at a higher scope
            /*   dispatch_async(dispatch_get_main_queue(), ^{
                
                  // if ( urlData ) {
                       //[urlData writeToFile:mbfilePath atomically:YES];
                    
                    
                        
                       });*/
                                                                 
               
           }); // End of Download Queue
      }
      else
      {
        map.delegate = self;
        MBXMBTilesOverlay *mbtilesOverlay;
        mbtilesOverlay = [[MBXMBTilesOverlay alloc] initWithMBTilesPath:mbfilePath];
        [map addOverlay:mbtilesOverlay];
     
      }
      
        
    }


// End of ViewDidLoad

// UpdatePlist with a status of installed and log mbtiles that have been installed
- (void)updatePlist {
    
    NSLog(@"Entered the updated plist");
    
    // Add status before the JSON serialization
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    
    NSString *documentsDirectory = [paths objectAtIndex:0];
    NSString *plistPath = [documentsDirectory stringByAppendingPathComponent:@"Converted.plist"];
    NSFileManager *fileManager = [NSFileManager defaultManager];
    
    if (![fileManager fileExistsAtPath: plistPath]) {
        
        plistPath = [documentsDirectory stringByAppendingPathComponent: [NSString stringWithFormat:@"Converted.plist"] ];
    }
    
    NSMutableDictionary *plistData;
    
    if ([fileManager fileExistsAtPath: plistPath]) {
        
        plistData = [[NSMutableDictionary alloc] initWithContentsOfFile: plistPath];
    }
    else {
        // If the file doesn’t exist, create an empty dictionary
        plistData = [[NSMutableDictionary alloc] init];
    }
    
    // Parse the dictionary once it is loaded
    NSMutableDictionary* quilted_tilesets = [plistData objectForKey:@"quilted_tilesets"];
    
    // Intended to scan and write status field to each mbtile dictionary.... then check if mbtile is there, if it is - set status field to installed
    
    NSMutableArray *installed = [[NSMutableArray alloc] init];
    self.sortedNameArray = [[NSArray alloc] init];
    
    NSMutableDictionary *statDict = [[NSMutableDictionary alloc] init];
    NSString *statusVar = [[NSString alloc] init];
    
    // Identify which tiles have been installed
    for (id key in [quilted_tilesets allKeys]) {
        id value = [quilted_tilesets objectForKey:key];
        
        if ([value isKindOfClass:[NSMutableDictionary class]]) {
            
            NSDictionary* mbtilesDict = [quilted_tilesets objectForKey:key];
            
            statusVar = [mbtilesDict objectForKey:@"status"];
            [installed addObject:key];
            
            NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
            NSString *documentsPath = [paths objectAtIndex:0];
            
            NSString *filename = [NSString stringWithFormat:@"%@.mbtiles", key];
            NSString* mbfilePath = [documentsPath stringByAppendingPathComponent:filename];
            BOOL fileExists1 = [[NSFileManager defaultManager] fileExistsAtPath:mbfilePath];
            
            if (fileExists1 == 1)
                NSLog(@"%@",key);
        }
    }
    
    // Initalize sorted array for cell text label
    self.sortedNameArray = [installed sortedArrayUsingSelector:@selector(localizedCaseInsensitiveCompare:)];
    
    NSMutableArray *statusArr = [[NSMutableArray alloc] init];
    
    for (NSString* key in _sortedNameArray) {
        id value = [quilted_tilesets objectForKey:key];
        
        if ([value isKindOfClass:[NSMutableDictionary class]]) {
            
            NSDictionary* mbtilesDict = [quilted_tilesets objectForKey:key];
            
            statusVar = [mbtilesDict objectForKey:@"status"];
            [statDict objectForKey:key];
            [statusArr addObject:statusVar];
        }
    }
    
    // Initialize array for use in the cell detail text labels
    self.statusArray = [[NSArray alloc] initWithArray:statusArr];
    
}

// Remove mbtiles overlay from mapView
- (void)removeView: (int)index  //pass in index get overlay out of array and set that to null in the array
{
    if (overlays[index] != NULL) {
        MBXMBTilesOverlay *mbtilesOverlay = (MBXMBTilesOverlay *)overlays[index];
        [self.mapView removeOverlay:mbtilesOverlay];
        overlays[index] = NULL;
    }
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

// Render Overlays - MBXMBTilesOverlay
- (MKOverlayRenderer *)mapView:(MKMapView *)mapView rendererForOverlay:(id <MKOverlay>)overlay
{
    if([overlay isKindOfClass:[MKTileOverlay class]]) {
        MKTileOverlayRenderer *r = [[MKTileOverlayRenderer alloc] initWithTileOverlay:overlay];
        return r;
    }
    return nil;
}


#pragma mark -
#pragma mark UITableViewDataSource

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    const NSInteger ktableSize = 26;
    
    return ktableSize;
}
/*
// Assigns integer for selected cell in tableview and assigns a tileset
#pragma mark UITableViewDelegate

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    
    NSUInteger index = [[tableView indexPathsForVisibleRows] indexOfObject:indexPath];
    
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documentsPath = [paths objectAtIndex:0];
    
    // Set the selected tileset
    selectedTileset = [self.sortedNameArray objectAtIndex:indexPath.row];
    NSLog(@"%@", selectedTileset);
    
    // MBTiles file
    mbPath = [NSString stringWithFormat:@"%@.mbtiles", selectedTileset];
    
    // Set the mbtiles path for selected tileset
    mbtilesPath = [documentsPath stringByAppendingPathComponent:mbPath];
    NSLog(@"%@", mbtilesPath);
    
    // Set and remove the checkmark in the UITableView
    if (index != NSNotFound) {
        
        UITableViewCell *cell = [[tableView visibleCells] objectAtIndex:index];
        
        if ([[tableView cellForRowAtIndexPath:indexPath] accessoryType] != UITableViewCellAccessoryCheckmark){
            
            [[tableView cellForRowAtIndexPath:indexPath] setAccessoryType:UITableViewCellAccessoryCheckmark];
            [_checkedArray addObject:[self.sortedNameArray objectAtIndex:indexPath.row]];
            [_marks replaceObjectAtIndex:indexPath.row withObject:@"YES"];
            
            NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
            NSString *documentsPath = [paths objectAtIndex:0];
            
            NSString *mbfileName = [NSString stringWithFormat:@"%@.mbtiles", selectedTileset];
            NSString* mbfilePath = [documentsPath stringByAppendingPathComponent:mbfileName];
            
            // See if the mbtiles path file exists
            BOOL fileExists = [[NSFileManager defaultManager] fileExistsAtPath:mbfilePath];
            NSLog(@"%@", filename);
            
            NSString *documentsDirectory = [paths objectAtIndex:0];
            NSString *plistPath = [documentsDirectory stringByAppendingPathComponent:@"Converted.plist"];
            NSFileManager *fileManager = [NSFileManager defaultManager];
            
            // Check to see if Converted.plist has been created  //TODO: Is this segment of code necessary
            if (![fileManager fileExistsAtPath: plistPath]) {
                NSLog(@"Is this ever necessary");
                plistPath = [documentsDirectory stringByAppendingPathComponent: [NSString stringWithFormat:@"Converted.plist"] ];
            }
            
            NSMutableDictionary *plistData;
            
            if ([fileManager fileExistsAtPath: plistPath]) {
                
                plistData = [[NSMutableDictionary alloc] initWithContentsOfFile: plistPath];
                
                // Parse the dictionary once it is loaded
                NSMutableDictionary* quilted_tilesets = [plistData objectForKey:@"quilted_tilesets"];
                NSMutableDictionary* mbtilesDict = [quilted_tilesets objectForKey:selectedTileset];
               // NSString* downloadUrl1 = [mbtilesDict objectForKey:@"url"];
                


                // Logging for downloads
                NSString* fileSize = [mbtilesDict objectForKey:@"size"];
                NSLog(@"FilePath: %@", [mbtilesDict objectForKey:@"url"]);
                NSLog(@"FileSize: %@", [mbtilesDict objectForKey:@"size"]);
                NSLog(@"Status: %@", [mbtilesDict objectForKey:@"status"]);
                
                NSLog(@"%@", _marks);

                
                // If a mbtiles file does not exist trigger the Alert to install MBTiles
                if (fileExists != 1) {
                    
                    UIAlertController * alert=   [UIAlertController
                                                  alertControllerWithTitle:(selectedTileset)
                                                  message:@"This MBTile has not been installed.  Would you like to install?"
                                                  preferredStyle:UIAlertControllerStyleAlert];
                    
                    self.alert2 = [UIAlertController alertControllerWithTitle:@"Downloading"
                                                                      message:@"Please wait...\n\n\n"
                                                               preferredStyle:UIAlertControllerStyleAlert];
                    
                    
                    UIAlertAction* ok = [UIAlertAction
                                         actionWithTitle:@"Install"
                                         style:UIAlertActionStyleDefault
                                         handler:^(UIAlertAction * action)
                                         {
                                             // Checking for internet connectivity
                                             Reachability *reachability = [Reachability reachabilityForInternetConnection];
                                             [reachability startNotifier];
                                             
                                             NetworkStatus status = [reachability currentReachabilityStatus];
                                             
                                             if (status == NotReachable)
                                             {
                                                 NSLog(@"No Internet Connection");
                                                 UIAlertController * internetAlert=   [UIAlertController
                                                                                       alertControllerWithTitle:@"No Internet Connection"
                                                                                       message:@"To download the latest content please connect to the internet and restart your app."
                                                                                       preferredStyle:UIAlertControllerStyleAlert];
                                                 
                                                 
                                                 UIAlertAction* dismiss = [UIAlertAction
                                                                           actionWithTitle:@"Dismiss"
                                                                           style:UIAlertActionStyleDefault
                                                                           handler:^(UIAlertAction * action)
                                                                           {
                                                                               [internetAlert dismissViewControllerAnimated:YES completion:nil];
                                                                           }];
                                                 
                                                 [internetAlert addAction:dismiss];
                                                 [self presentViewController:internetAlert animated:YES completion:nil];
                                                 
                                             } else if (status == ReachableViaWiFi || status == ReachableViaWWAN) {
                                                 
                                                 NSLog(@"Connected to WIFI or DataPlan");
                                                 
                                                 // TODO: Add add async for writing and downloading data
                                                 NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
                                                 NSString *documentsDirectory = [paths objectAtIndex:0];
                                                 NSString *mbfileName = [NSString stringWithFormat:@"%@.mbtiles", selectedTileset];
                                                 
                                                 NSString *mbfilePath = [NSString stringWithFormat:@"%@/%@", documentsDirectory,mbfileName];
                                                 
                                                 NSLog(@"Checked");
                                                 NSLog(@"%@", mbfilePath);
                                                 
                                                 // Download dispatch queue
                                                 dispatch_queue_t downloadQueue = dispatch_queue_create("MBTiles Download", NULL);
                                                 dispatch_async(downloadQueue, ^{
                                                     
                                                     if (nil == download){
                                                         NSString *urlToDownload = @"https://s3.us-east-2.amazonaws.com/lokahimapfiles/MBTILES_09.mbtiles";
                                                         NSURL *url = [NSURL URLWithString:urlToDownload];
                                                         
                                                         NSURLRequest *request = [NSURLRequest requestWithURL:url];
                                                         NSURLConnection *connection = [[NSURLConnection alloc] initWithRequest:request delegate:self startImmediately:YES];
                                                         
                                                         //Start Download
                                                         download = [self.backgroundSession downloadTaskWithURL:url];
                                                         [download resume];
                                                         NSData *urlData = [NSData dataWithContentsOfURL:url];
                                                         // store urldata at a higher scope
                                                        dispatch_async(dispatch_get_main_queue(), ^{
                                                         
                                                            if ( urlData ) {
                                                                [urlData writeToFile:mbfilePath atomically:YES];
                                                                NSLog(@"%@", mbfilePath);
                                                                NSLog(@"File Saved");
                                                                // Update status and remove dialogue
                                                                [self updatePlist];
                                                                NSLog(@"PLIST UPDATED");
                                                                [self.alert2 dismissViewControllerAnimated:NO completion:nil];
                                                                [_marks replaceObjectAtIndex:indexPath.row withObject:@"NO"];
                                                                [self.tableView reloadData];
                                                         
                                                                        }
                                                                });
                                                         
                                                                                                                  
                                                        }
                                                    }); // End of Download Queue
                                                 
                                                 // Trigger second alert with progress view
                                                 [self presentViewController:self.alert2 animated:YES completion:^{
                                                     self.progressView = [[UIProgressView alloc] initWithFrame:CGRectMake(30.0f, 100.0f, 210.0f, 13.0f)];
                                                     [self.alert2.view addSubview:_progressView];
                                                     
                                                     self.lbl_download = [[UILabel alloc] initWithFrame:CGRectMake(120.0f, 70.0f, 210.0f, 13.0f)];
                                                     [self.alert2.view addSubview:_lbl_download];
                                                     
                                                     self.lbl_write = [[UILabel alloc] initWithFrame:CGRectMake(95.0f, 70.0f, 210.0f, 20.0f)];
                                                     [self.alert2.view addSubview:_lbl_write];

                                                     
                                                 }];
                                                 
                                                 // Set status for downloaded mbtile to installed
                                                 NSMutableDictionary* quilted_tilesets = [plistData objectForKey:@"quilted_tilesets"];
                                                 NSMutableDictionary* mbtilesDict = [quilted_tilesets objectForKey:selectedTileset];
                                                 [mbtilesDict setObject:@"Installed" forKey:@"status"];
                                                 NSLog(@"%@/ %@",selectedTileset, [mbtilesDict objectForKey:@"status"]);
                                                 
                                                 
                                                 [plistData writeToFile:plistPath atomically:YES];
                                                 
                                             } // Braket for the internet connectivity
                                             
                                         }];
                    
                    UIAlertAction* cancel2 = [UIAlertAction
                                              actionWithTitle:@"Cancel"
                                              style:UIAlertActionStyleDefault
                                              handler:^(UIAlertAction * action)
                                              {
                                                  if (nil != download){
                                                      [download cancel];
                                                  }
                                                  [self.alert2 dismissViewControllerAnimated:NO completion:nil];
                                                  
                                              }];
                    
                    // Remove checkmark and dismiss second alert
                    [alert dismissViewControllerAnimated:YES completion:nil];
                    [cell setAccessoryType:UITableViewCellAccessoryNone];
                    
                    
                    UIAlertAction* cancel = [UIAlertAction
                                             actionWithTitle:@"Cancel"
                                             style:UIAlertActionStyleDefault
                                             handler:^(UIAlertAction * action)
                                             {
                                                 [alert dismissViewControllerAnimated:YES completion:nil];
                                                 [cell setAccessoryType:UITableViewCellAccessoryNone];
                                             }];
                    
                    [alert addAction:ok];
                    [alert addAction:cancel];
                    [self.alert2 addAction:cancel2];
                    
                    [self presentViewController:alert animated:YES completion:nil];
                    
                    // Else if the mbtile file exists render overlay
                    
                } else {
                    
                    // Add mbtiles overlay to the map view
                    if (overlays[(int)index] == NULL) {
                        MBXMBTilesOverlay *mbtilesOverlay;
                        mbtilesOverlay = [[MBXMBTilesOverlay alloc] initWithMBTilesPath:mbtilesPath];
                        [self.mapView addOverlay:mbtilesOverlay];
                        
                        overlays[(int)index] = mbtilesOverlay;
                    }
                    
                    // If the mbtiles file does exist, create a new plist with statuses of existing files set to installed
                    if (fileExists == 1) {
                        NSLog(@"EXISTS");
                        NSLog(selectedTileset);
                        //Get the documents directory path
                        NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
                        NSString *documentsDirectory = [paths objectAtIndex:0];
                        NSString *plistPath = [documentsDirectory stringByAppendingPathComponent:@"Converted.plist"];
                        NSFileManager *fileManager = [NSFileManager defaultManager];
                    }
                    
                }
                
            }
            else {
                //TODO: If the file doesn’t exist, show an error message
                NSLog(@"File Doesnt't Exist");
            }
            // else remove check and call remove view method
        } else {
            [[tableView cellForRowAtIndexPath:indexPath] setAccessoryType:UITableViewCellAccessoryNone];
            [_checkedArray removeObject:[self.sortedNameArray objectAtIndex:indexPath.row]];
            [_marks replaceObjectAtIndex:indexPath.row withObject:@"NO"];
            NSLog(@"Unchecked");
            
            [self removeView:(int)index]; //method accept the index
            NSLog(@"%@", _marks);
        }
    } else {
        // Log message that index was NSNotFound
    }
}
*/
/*
// Populate the UITableViewCells with content from the plist
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    // static NSString *kStandardCellID = @"StandardCell";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"StandardCellID"];
    
    if (cell == nil) {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:@"StandardCellID"];
    }
        
    // Populate table cells with content
    cell.textLabel.text = [self.sortedNameArray objectAtIndex:indexPath.row];
    cell.textLabel.backgroundColor = [UIColor clearColor];
    cell.detailTextLabel.backgroundColor = [UIColor clearColor];
    cell.backgroundColor = [UIColor colorWithWhite:2 alpha:.75];
    
    cell.detailTextLabel.text = [self.statusArray objectAtIndex:indexPath.row];
    cell.detailTextLabel.textColor = [UIColor grayColor];
    
    // Maintain a record of the check and unchecked cells
    cell.textLabel.text = [_sortedNameArray objectAtIndex:indexPath.row];
    if ([[_marks objectAtIndex:indexPath.row] isEqualToString:@"YES"]) {
        [cell setAccessoryType:UITableViewCellAccessoryCheckmark];
    }else {
        [cell setAccessoryType:UITableViewCellAccessoryNone];
    }

    
    return cell;
}
*/
#pragma mark - animations -
-(void)showMenu{
    NSLog(@"showing");
    //slide the content view to the right to reveal the menu
    [UIView animateWithDuration:.27
                     animations:^{
                         [tableView setFrame:CGRectMake(tableView.frame.origin.x, tableView.frame.origin.y, 160, tableView.frame.size.height)];
                     }];
}
-(void)hideMenu{
    NSLog(@"hiding");
    //slide the content view to the left to hide the menu
    [UIView animateWithDuration:.27
                     animations:^{
                         [tableView setFrame:CGRectMake(0, tableView.frame.origin.y, 0, tableView.frame.size.height)];
                     }];
}

#pragma mark - Actions -
- (IBAction)showMenuDown:(id)sender {
    
    if(tableView.frame.size.width == 0) //only show the menu if it is not already shown
        [self showMenu];
    else
        [self hideMenu];
}

#pragma mark - Gesture handlers -
-(void)handleSwipeLeft:(UISwipeGestureRecognizer*)recognizer{
    
    if(tableView.frame.size.width != 0)
        [self hideMenu];
}

-(void)handleSwipeRight:(UISwipeGestureRecognizer*)recognizer{
    if(tableView.frame.origin.x == 0)
        [self showMenu];
}






// Save the mbtile to be written to the documents directory
- (void)URLSession:(NSURLSession *)session downloadTask:(NSURLSessionDownloadTask *)downloadTask didFinishDownloadingToURL:(NSURL *)location{
      NSData *urlData = [NSData dataWithContentsOfURL:location];
      
      NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
      NSString *documentDirectoryPath = [paths objectAtIndex:0];
      
      NSLog(@"Start write file local");
      mbtilesPath = [documentDirectoryPath stringByAppendingPathComponent:mbFileurl.lastPathComponent];
       [urlData writeToFile:mbtilesPath atomically:YES];
     NSLog(@"%@", mbtilesPath);
     NSLog(@"File Saved");
  
  if ([[NSFileManager defaultManager] fileExistsAtPath:mbtilesPath] == true)
  {
    
  MBXMBTilesOverlay *mbtilesOverlay;
  mbtilesOverlay = [[MBXMBTilesOverlay alloc] initWithMBTilesPath:mbtilesPath];
  [self.mapView addOverlay:mbtilesOverlay];
    NSLog(@"Add Tiles Overlay");
    
  }
    // This is where the file is going to be written
  /*  NSURL *destinationURL = [NSURL fileURLWithPath:[documentDirectoryPath stringByAppendingPathComponent:filename]];
    
    NSError *error = nil;
    
    if ([fileManager fileExistsAtPath:[destinationURL path]]){
        [fileManager replaceItemAtURL:destinationURL withItemAtURL:destinationURL backupItemName:nil options:NSFileManagerItemReplacementUsingNewMetadataOnly resultingItemURL:nil error:&error];
        
    } else {
        
        if ([fileManager moveItemAtURL:location toURL:destinationURL error:&error]) {
            
        } else {
            UIAlertView *alert = [[UIAlertView alloc]initWithTitle:@"MBTiles Sample App" message:[NSString stringWithFormat:@"An error has occurred when moving the file: %@",[error localizedDescription]] delegate:self cancelButtonTitle:@"Ok" otherButtonTitles:nil, nil];
            [alert show];
        }
    }*/
}

// Download for MBTilesets
- (void)URLSession:(NSURLSession *)session downloadTask:(NSURLSessionDownloadTask *)downloadTask didWriteData:(int64_t)bytesWritten totalBytesWritten:(int64_t)totalBytesWritten totalBytesExpectedToWrite:(int64_t)totalBytesExpectedToWrite{
    
    // Progress View instance
   // [self.progressView setProgress:(double)totalBytesWritten/(double)totalBytesExpectedToWrite
                       //   animated:YES];
    
    float percentage = ((totalBytesWritten / (totalBytesExpectedToWrite * 1.0f) * 100));
  //NSLog(@"%@",[NSString stringWithFormat:@"%0.f%%", percentage]);
   // self.lbl_download.text = [NSString stringWithFormat:@"%0.f%%", percentage];
  
  [[NSNotificationCenter defaultCenter]postNotificationName:@"UpdateProgresstNotification" object:nil userInfo:@{@"Progress":[NSString stringWithFormat:@"%0.f%%", percentage]}];
  

  /*  // When download is completed dismiss second alert and update plist
    if (percentage == 100){
        self.lbl_download.hidden = YES;
        self.lbl_write.text = @"Writing File...";
        [_lbl_write setFont:[UIFont fontWithName:@"Arial" size:15]];

    }
    
    // Start progress view
    if (self.progressView.progress == 2) {
        self.progressView.hidden = YES;
    } else {
        self.progressView.hidden = NO;
    }*/
}


// Reset the URLSession for future downloads
- (void)URLSession:(NSURLSession *)session task:(NSURLSessionTask *)task didCompleteWithError:(NSError *)error{
    
    download = nil;
    [self.progressView setProgress:0];
    
    
    // Check to see if a secure connection being is made using https
    if (error) {
        UIAlertView *alert = [[UIAlertView alloc]initWithTitle:@"MBTiles Previewer" message:[error localizedDescription] delegate:self cancelButtonTitle:@"Ok" otherButtonTitles:nil, nil];
        [alert show];
    }
    
}


@end
