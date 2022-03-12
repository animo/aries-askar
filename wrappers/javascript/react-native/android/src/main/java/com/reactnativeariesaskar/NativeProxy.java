package com.reactnativeariesaskar;

import android.util.Log;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.turbomodule.core.CallInvokerHolderImpl;

public class NativeProxy {

  private native void
  installNativeJsi(long jsContextNativePointer,
                   CallInvokerHolderImpl jsCallInvokerHolder);

  public void installJsi(ReactContext context) {
    Log.d("Turboutils", "Installing native...");
    CallInvokerHolderImpl holder =
        (CallInvokerHolderImpl)context.getCatalystInstance()
            .getJSCallInvokerHolder();
    long contextPointer = context.getJavaScriptContextHolder().get();
    installNativeJsi(contextPointer, holder);
  }
}
