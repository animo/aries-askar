cmake_minimum_required(VERSION 3.4.1)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 14)

set(build_DIR ${CMAKE_SOURCE_DIR}/build)

set(PACKAGE_NAME "aries_askar")

include_directories(
        ../cpp
        ../cpp/include
        ../cpp/generated
        ../node_modules/react-native/React
        ../node_modules/react-native/React/Base
        ../node_modules/react-native/ReactCommon
        ../node_modules/react-native/ReactCommon/jsi
        ../node_modules/react-native/ReactCommon/callinvoker
        ../node_modules/react-native/ReactCommon/jsiexecutor/jsireact
        ../node_modules/react-native/ReactCommon/react/nativemodule
        ../node_modules/react-native/ReactCommon/react/nativemodule/core
        ../node_modules/react-native/ReactCommon/react/nativemodule/core/ReactCommon
        ../node_modules/react-native/ReactAndroid/src/main/java/com/facebook/react/turbomodule/core/jni/ReactCommon
)

add_library(libaries_askar STATIC IMPORTED)
set_target_properties(
   libaries_askar
   PROPERTIES
   IMPORTED_LOCATION ${CMAKE_SOURCE_DIR}/libs/${ANDROID_ABI}/libaries_askar.a
)

find_package(fbjni REQUIRED CONFIG)

add_library(
        ${PACKAGE_NAME}
        SHARED
        ../node_modules/react-native/ReactCommon/jsi/jsi/jsi.cpp
        ../node_modules/react-native/ReactAndroid/src/main/java/com/facebook/react/turbomodule/core/jni/ReactCommon/CallInvokerHolder.cpp
        ../node_modules/react-native/ReactCommon/react/nativemodule/core/ReactCommon/TurboModule.cpp
        ../cpp/TurboModuleUtils.cpp
        ../cpp/react-native-aries-askar.cpp
        ../cpp/generated/NativeModules.cpp
        cpp-adapter.cpp
)

target_link_libraries(
        ${PACKAGE_NAME}
        fbjni::fbjni
        android
        log
        libaries_askar
)

add_library(
        turbomodulejsijni
        SHARED
        ../cpp/empty.cpp
)
