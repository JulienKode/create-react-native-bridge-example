package com.bridgeexample;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class NoodleManager extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    NoodleManager(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    // Will be the name of your native module
    @Override
    public String getName() {
        return "NoodleManager";
    }

    @ReactMethod
    public void addNoodle(String name, Callback response) {
        response.invoke(name, "your noodle are ready !");
    }
}