#pragma once

#include "NativeModules.h"
#include "TurboModuleUtils.h"
#include "libaries-askar.h" 
#include <ReactCommon/TurboModule.h>
#include <jsi/jsi.h>
#include <jsi/jsilib.h>

namespace facebook {
namespace react {

class AriesAskarCxx : public AriesAskarCxxSpecJSI {
public:
    AriesAskarCxx(std::shared_ptr<CallInvoker> jsInvoker);

    jsi::String version(jsi::Runtime &rt);
};
}
}
