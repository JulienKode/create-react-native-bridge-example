//
//  NoodleButtonManager.h
//  BridgeExample
//
//  Created by Julien Karst on 29/10/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//


#import <UIKit/UIKit.h>
#import <React/RCTViewManager.h>

@interface RNTNoodleButtonManager : RCTViewManager
@end

@implementation RNTNoodleButtonManager

// Will be the name of the component to call on the javascript side
RCT_EXPORT_MODULE(RNTNoodleButton)

- (UIView *)view
{
  UIButton *button = [UIButton buttonWithType:UIButtonTypeSystem];
  [button setTitle:@"Get noodles" forState:UIControlStateNormal];
  [button sizeToFit];
  return button;
}

@end
