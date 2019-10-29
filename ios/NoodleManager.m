//
//  NoodleManager.m
//  BridgeExample
//
//  Created by Julien Karst on 29/10/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "NoodleManager.h"
#import <React/RCTLog.h>

@implementation NoodleManager

// To export a module named NoodleManager
RCT_EXPORT_MODULE();

// Get property with name and trigger a callback to the javascript thread
RCT_EXPORT_METHOD(addNoodle:(NSString *)name response:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"We are cooking your Noodle %@ ", name);
  callback(@[name, @"Your noodle is now ready !"]);
}

@end
