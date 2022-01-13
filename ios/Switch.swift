import Foundation
@objc(Switch)
class Switch: RCTViewManager {
  
  override func view() -> UIView! {
 
    return SwitchView()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

}
