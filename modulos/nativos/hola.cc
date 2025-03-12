#include <node.h>
#include <v8.h>

namespace demo {
   using v8::FunctionCallbackInfo;
   using v8::Isolate;
   using v8::Local;
   using v8::Object;
   using v8::String;
   using v8::Value;

   // Función que devuelve "Mundo"
   void Hola(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = args.GetIsolate();
      args.GetReturnValue().Set(String::NewFromUtf8(isolate, "HolaMundo", v8::NewStringType::kNormal).ToLocalChecked());
   }

   // Inicializa el módulo
   void Initialize(Local<Object> exports) {
      NODE_SET_METHOD(exports, "hola", Hola);
   }

   // Registra el módulo
   NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)
}  // namespace demo