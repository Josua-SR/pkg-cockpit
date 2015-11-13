#include <gio/gio.h>

#if defined (__ELF__) && ( __GNUC__ > 2 || (__GNUC__ == 2 && __GNUC_MINOR__ >= 6))
# define SECTION __attribute__ ((section (".gresource.cockpitassets"), aligned (8)))
#else
# define SECTION
#endif

static const SECTION union { const guint8 data[3664]; const double alignment; void * const ptr;}  cockpitassets_resource_data = { {
  0x47, 0x56, 0x61, 0x72, 0x69, 0x61, 0x6e, 0x74, 
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
  0x18, 0x00, 0x00, 0x00, 0xac, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x28, 0x05, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00, 
  0x03, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00, 
  0x05, 0x00, 0x00, 0x00, 0xd4, 0xb5, 0x02, 0x00, 
  0xff, 0xff, 0xff, 0xff, 0xac, 0x00, 0x00, 0x00, 
  0x01, 0x00, 0x4c, 0x00, 0xb0, 0x00, 0x00, 0x00, 
  0xb4, 0x00, 0x00, 0x00, 0x4b, 0x50, 0x90, 0x0b, 
  0x00, 0x00, 0x00, 0x00, 0xb4, 0x00, 0x00, 0x00, 
  0x04, 0x00, 0x4c, 0x00, 0xb8, 0x00, 0x00, 0x00, 
  0xbc, 0x00, 0x00, 0x00, 0xa6, 0x08, 0xfa, 0x3e, 
  0x04, 0x00, 0x00, 0x00, 0xbc, 0x00, 0x00, 0x00, 
  0x09, 0x00, 0x76, 0x00, 0xc8, 0x00, 0x00, 0x00, 
  0x2e, 0x0e, 0x00, 0x00, 0x8b, 0xe1, 0x23, 0xfe, 
  0x01, 0x00, 0x00, 0x00, 0x2e, 0x0e, 0x00, 0x00, 
  0x10, 0x00, 0x4c, 0x00, 0x40, 0x0e, 0x00, 0x00, 
  0x44, 0x0e, 0x00, 0x00, 0x87, 0x77, 0x7f, 0x34, 
  0x03, 0x00, 0x00, 0x00, 0x44, 0x0e, 0x00, 0x00, 
  0x08, 0x00, 0x4c, 0x00, 0x4c, 0x0e, 0x00, 0x00, 
  0x50, 0x0e, 0x00, 0x00, 0x2f, 0x00, 0x00, 0x00, 
  0x01, 0x00, 0x00, 0x00, 0x6f, 0x72, 0x67, 0x2f, 
  0x03, 0x00, 0x00, 0x00, 0x66, 0x61, 0x69, 0x6c, 
  0x2e, 0x68, 0x74, 0x6d, 0x6c, 0x00, 0x00, 0x00, 
  0x56, 0x0d, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
  0x3c, 0x21, 0x44, 0x4f, 0x43, 0x54, 0x59, 0x50, 
  0x45, 0x20, 0x68, 0x74, 0x6d, 0x6c, 0x3e, 0x0a, 
  0x3c, 0x68, 0x74, 0x6d, 0x6c, 0x3e, 0x0a, 0x3c, 
  0x68, 0x65, 0x61, 0x64, 0x3e, 0x0a, 0x20, 0x20, 
  0x20, 0x20, 0x3c, 0x74, 0x69, 0x74, 0x6c, 0x65, 
  0x3e, 0x40, 0x40, 0x6d, 0x65, 0x73, 0x73, 0x61, 
  0x67, 0x65, 0x40, 0x40, 0x3c, 0x2f, 0x74, 0x69, 
  0x74, 0x6c, 0x65, 0x3e, 0x0a, 0x20, 0x20, 0x20, 
  0x20, 0x3c, 0x6d, 0x65, 0x74, 0x61, 0x20, 0x68, 
  0x74, 0x74, 0x70, 0x2d, 0x65, 0x71, 0x75, 0x69, 
  0x76, 0x3d, 0x22, 0x43, 0x6f, 0x6e, 0x74, 0x65, 
  0x6e, 0x74, 0x2d, 0x54, 0x79, 0x70, 0x65, 0x22, 
  0x20, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 
  0x3d, 0x22, 0x74, 0x65, 0x78, 0x74, 0x2f, 0x68, 
  0x74, 0x6d, 0x6c, 0x3b, 0x20, 0x63, 0x68, 0x61, 
  0x72, 0x73, 0x65, 0x74, 0x3d, 0x75, 0x74, 0x66, 
  0x2d, 0x38, 0x22, 0x3e, 0x0a, 0x20, 0x20, 0x20, 
  0x20, 0x3c, 0x6d, 0x65, 0x74, 0x61, 0x20, 0x6e, 
  0x61, 0x6d, 0x65, 0x3d, 0x22, 0x76, 0x69, 0x65, 
  0x77, 0x70, 0x6f, 0x72, 0x74, 0x22, 0x20, 0x63, 
  0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x3d, 0x22, 
  0x77, 0x69, 0x64, 0x74, 0x68, 0x3d, 0x64, 0x65, 
  0x76, 0x69, 0x63, 0x65, 0x2d, 0x77, 0x69, 0x64, 
  0x74, 0x68, 0x2c, 0x20, 0x69, 0x6e, 0x69, 0x74, 
  0x69, 0x61, 0x6c, 0x2d, 0x73, 0x63, 0x61, 0x6c, 
  0x65, 0x3d, 0x31, 0x2e, 0x30, 0x22, 0x3e, 0x0a, 
  0x20, 0x20, 0x20, 0x20, 0x3c, 0x73, 0x74, 0x79, 
  0x6c, 0x65, 0x3e, 0x0a, 0x09, 0x62, 0x6f, 0x64, 
  0x79, 0x20, 0x7b, 0x0a, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x6d, 0x61, 0x72, 0x67, 0x69, 0x6e, 0x3a, 0x20, 
  0x30, 0x3b, 0x0a, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x66, 
  0x6f, 0x6e, 0x74, 0x2d, 0x66, 0x61, 0x6d, 0x69, 
  0x6c, 0x79, 0x3a, 0x20, 0x22, 0x4f, 0x70, 0x65, 
  0x6e, 0x20, 0x53, 0x61, 0x6e, 0x73, 0x22, 0x2c, 
  0x20, 0x48, 0x65, 0x6c, 0x76, 0x65, 0x74, 0x69, 
  0x63, 0x61, 0x2c, 0x20, 0x41, 0x72, 0x69, 0x61, 
  0x6c, 0x2c, 0x20, 0x73, 0x61, 0x6e, 0x73, 0x2d, 
  0x73, 0x65, 0x72, 0x69, 0x66, 0x3b, 0x0a, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x66, 0x6f, 0x6e, 0x74, 0x2d, 
  0x73, 0x69, 0x7a, 0x65, 0x3a, 0x20, 0x31, 0x32, 
  0x70, 0x78, 0x3b, 0x0a, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x6c, 0x69, 0x6e, 0x65, 0x2d, 0x68, 0x65, 0x69, 
  0x67, 0x68, 0x74, 0x3a, 0x20, 0x31, 0x2e, 0x36, 
  0x36, 0x36, 0x36, 0x36, 0x36, 0x36, 0x37, 0x3b, 
  0x0a, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x63, 0x6f, 0x6c, 
  0x6f, 0x72, 0x3a, 0x20, 0x23, 0x33, 0x33, 0x33, 
  0x33, 0x33, 0x33, 0x3b, 0x0a, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x62, 0x61, 0x63, 0x6b, 0x67, 0x72, 0x6f, 
  0x75, 0x6e, 0x64, 0x2d, 0x63, 0x6f, 0x6c, 0x6f, 
  0x72, 0x3a, 0x20, 0x23, 0x66, 0x35, 0x66, 0x35, 
  0x66, 0x35, 0x3b, 0x0a, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x7d, 0x0a, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x69, 0x6d, 
  0x67, 0x20, 0x7b, 0x0a, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x62, 0x6f, 0x72, 0x64, 0x65, 0x72, 0x3a, 0x20, 
  0x30, 0x3b, 0x0a, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x76, 
  0x65, 0x72, 0x74, 0x69, 0x63, 0x61, 0x6c, 0x2d, 
  0x61, 0x6c, 0x69, 0x67, 0x6e, 0x3a, 0x20, 0x6d, 
  0x69, 0x64, 0x64, 0x6c, 0x65, 0x3b, 0x0a, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x7d, 
  0x0a, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x68, 0x31, 0x20, 0x7b, 0x0a, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x66, 0x6f, 0x6e, 0x74, 0x2d, 0x77, 
  0x65, 0x69, 0x67, 0x68, 0x74, 0x3a, 0x20, 0x33, 
  0x30, 0x30, 0x3b, 0x0a, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x7d, 0x0a, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x70, 0x20, 
  0x7b, 0x0a, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x6d, 0x61, 
  0x72, 0x67, 0x69, 0x6e, 0x3a, 0x20, 0x30, 0x20, 
  0x30, 0x20, 0x31, 0x30, 0x70, 0x78, 0x3b, 0x0a, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x7d, 0x0a, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x40, 0x66, 0x6f, 0x6e, 0x74, 0x2d, 
  0x66, 0x61, 0x63, 0x65, 0x20, 0x7b, 0x0a, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x66, 0x6f, 0x6e, 0x74, 0x2d, 
  0x66, 0x61, 0x6d, 0x69, 0x6c, 0x79, 0x3a, 0x20, 
  0x27, 0x4f, 0x70, 0x65, 0x6e, 0x20, 0x53, 0x61, 
  0x6e, 0x73, 0x27, 0x3b, 0x0a, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x66, 0x6f, 0x6e, 0x74, 0x2d, 0x73, 0x74, 
  0x79, 0x6c, 0x65, 0x3a, 0x20, 0x6e, 0x6f, 0x72, 
  0x6d, 0x61, 0x6c, 0x3b, 0x0a, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x66, 0x6f, 0x6e, 0x74, 0x2d, 0x77, 0x65, 
  0x69, 0x67, 0x68, 0x74, 0x3a, 0x20, 0x33, 0x30, 
  0x30, 0x3b, 0x0a, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x73, 
  0x72, 0x63, 0x3a, 0x20, 0x75, 0x72, 0x6c, 0x28, 
  0x27, 0x2f, 0x63, 0x6f, 0x63, 0x6b, 0x70, 0x69, 
  0x74, 0x2f, 0x73, 0x74, 0x61, 0x74, 0x69, 0x63, 
  0x2f, 0x66, 0x6f, 0x6e, 0x74, 0x73, 0x2f, 0x4f, 
  0x70, 0x65, 0x6e, 0x53, 0x61, 0x6e, 0x73, 0x2d, 
  0x4c, 0x69, 0x67, 0x68, 0x74, 0x2d, 0x77, 0x65, 
  0x62, 0x66, 0x6f, 0x6e, 0x74, 0x2e, 0x77, 0x6f, 
  0x66, 0x66, 0x27, 0x29, 0x20, 0x66, 0x6f, 0x72, 
  0x6d, 0x61, 0x74, 0x28, 0x27, 0x77, 0x6f, 0x66, 
  0x66, 0x27, 0x29, 0x3b, 0x0a, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x7d, 0x0a, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x40, 
  0x66, 0x6f, 0x6e, 0x74, 0x2d, 0x66, 0x61, 0x63, 
  0x65, 0x20, 0x7b, 0x0a, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x66, 0x6f, 0x6e, 0x74, 0x2d, 0x66, 0x61, 0x6d, 
  0x69, 0x6c, 0x79, 0x3a, 0x20, 0x27, 0x4f, 0x70, 
  0x65, 0x6e, 0x20, 0x53, 0x61, 0x6e, 0x73, 0x27, 
  0x3b, 0x0a, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x66, 0x6f, 
  0x6e, 0x74, 0x2d, 0x73, 0x74, 0x79, 0x6c, 0x65, 
  0x3a, 0x20, 0x6e, 0x6f, 0x72, 0x6d, 0x61, 0x6c, 
  0x3b, 0x0a, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x66, 0x6f, 
  0x6e, 0x74, 0x2d, 0x77, 0x65, 0x69, 0x67, 0x68, 
  0x74, 0x3a, 0x20, 0x34, 0x30, 0x30, 0x3b, 0x0a, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x73, 0x72, 0x63, 0x3a, 
  0x20, 0x75, 0x72, 0x6c, 0x28, 0x27, 0x2f, 0x63, 
  0x6f, 0x63, 0x6b, 0x70, 0x69, 0x74, 0x2f, 0x73, 
  0x74, 0x61, 0x74, 0x69, 0x63, 0x2f, 0x66, 0x6f, 
  0x6e, 0x74, 0x73, 0x2f, 0x4f, 0x70, 0x65, 0x6e, 
  0x53, 0x61, 0x6e, 0x73, 0x2d, 0x52, 0x65, 0x67, 
  0x75, 0x6c, 0x61, 0x72, 0x2d, 0x77, 0x65, 0x62, 
  0x66, 0x6f, 0x6e, 0x74, 0x2e, 0x77, 0x6f, 0x66, 
  0x66, 0x27, 0x29, 0x20, 0x66, 0x6f, 0x72, 0x6d, 
  0x61, 0x74, 0x28, 0x27, 0x77, 0x6f, 0x66, 0x66, 
  0x27, 0x29, 0x3b, 0x0a, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x7d, 0x0a, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x2e, 0x62, 
  0x6c, 0x61, 0x6e, 0x6b, 0x2d, 0x73, 0x6c, 0x61, 
  0x74, 0x65, 0x2d, 0x70, 0x66, 0x20, 0x7b, 0x0a, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x74, 0x65, 0x78, 0x74, 
  0x2d, 0x61, 0x6c, 0x69, 0x67, 0x6e, 0x3a, 0x20, 
  0x63, 0x65, 0x6e, 0x74, 0x65, 0x72, 0x3b, 0x0a, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x70, 0x61, 0x64, 0x64, 
  0x69, 0x6e, 0x67, 0x3a, 0x20, 0x39, 0x30, 0x70, 
  0x78, 0x20, 0x31, 0x32, 0x30, 0x70, 0x78, 0x3b, 
  0x0a, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x20, 0x7d, 0x0a, 0x20, 0x20, 0x20, 0x20, 0x3c, 
  0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65, 0x3e, 0x0a, 
  0x3c, 0x2f, 0x68, 0x65, 0x61, 0x64, 0x3e, 0x0a, 
  0x3c, 0x62, 0x6f, 0x64, 0x79, 0x3e, 0x0a, 0x20, 
  0x20, 0x20, 0x20, 0x3c, 0x64, 0x69, 0x76, 0x20, 
  0x63, 0x6c, 0x61, 0x73, 0x73, 0x3d, 0x22, 0x62, 
  0x6c, 0x61, 0x6e, 0x6b, 0x2d, 0x73, 0x6c, 0x61, 
  0x74, 0x65, 0x2d, 0x70, 0x66, 0x22, 0x3e, 0x0a, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 
  0x3c, 0x69, 0x6d, 0x67, 0x20, 0x73, 0x72, 0x63, 
  0x3d, 0x22, 0x64, 0x61, 0x74, 0x61, 0x3a, 0x69, 
  0x6d, 0x61, 0x67, 0x65, 0x2f, 0x70, 0x6e, 0x67, 
  0x3b, 0x62, 0x61, 0x73, 0x65, 0x36, 0x34, 0x2c, 
  0x69, 0x56, 0x42, 0x4f, 0x52, 0x77, 0x30, 0x4b, 
  0x47, 0x67, 0x6f, 0x41, 0x41, 0x41, 0x41, 0x4e, 
  0x53, 0x55, 0x68, 0x45, 0x55, 0x67, 0x41, 0x41, 
  0x41, 0x44, 0x77, 0x41, 0x41, 0x41, 0x41, 0x38, 
  0x43, 0x41, 0x59, 0x41, 0x41, 0x41, 0x41, 0x36, 
  0x2f, 0x4e, 0x6c, 0x79, 0x41, 0x41, 0x41, 0x41, 
  0x42, 0x48, 0x4e, 0x43, 0x53, 0x56, 0x51, 0x49, 
  0x43, 0x41, 0x67, 0x49, 0x66, 0x41, 0x68, 0x6b, 
  0x69, 0x41, 0x41, 0x41, 0x41, 0x41, 0x6c, 0x77, 
  0x53, 0x46, 0x6c, 0x7a, 0x41, 0x41, 0x41, 0x4e, 
  0x31, 0x77, 0x41, 0x41, 0x44, 0x64, 0x63, 0x42, 
  0x51, 0x69, 0x69, 0x62, 0x65, 0x41, 0x41, 0x41, 
  0x41, 0x42, 0x6c, 0x30, 0x52, 0x56, 0x68, 0x30, 
  0x55, 0x32, 0x39, 0x6d, 0x64, 0x48, 0x64, 0x68, 
  0x63, 0x6d, 0x55, 0x41, 0x64, 0x33, 0x64, 0x33, 
  0x4c, 0x6d, 0x6c, 0x75, 0x61, 0x33, 0x4e, 0x6a, 
  0x59, 0x58, 0x42, 0x6c, 0x4c, 0x6d, 0x39, 0x79, 
  0x5a, 0x35, 0x76, 0x75, 0x50, 0x42, 0x6f, 0x41, 
  0x41, 0x41, 0x57, 0x47, 0x53, 0x55, 0x52, 0x42, 
  0x56, 0x47, 0x69, 0x42, 0x7a, 0x5a, 0x74, 0x4e, 
  0x61, 0x4a, 0x78, 0x46, 0x47, 0x4d, 0x64, 0x2f, 
  0x7a, 0x32, 0x52, 0x33, 0x59, 0x78, 0x48, 0x62, 
  0x74, 0x5a, 0x61, 0x32, 0x70, 0x71, 0x64, 0x63, 
  0x50, 0x49, 0x6e, 0x53, 0x39, 0x43, 0x43, 0x55, 
  0x6f, 0x76, 0x33, 0x51, 0x69, 0x75, 0x68, 0x46, 
  0x32, 0x68, 0x49, 0x55, 0x6a, 0x4f, 0x5a, 0x72, 
  0x64, 0x35, 0x4e, 0x41, 0x39, 0x56, 0x6f, 0x50, 
  0x75, 0x69, 0x4a, 0x53, 0x54, 0x78, 0x36, 0x53, 
  0x30, 0x73, 0x32, 0x37, 0x53, 0x56, 0x78, 0x4a, 
  0x38, 0x61, 0x4f, 0x70, 0x50, 0x53, 0x67, 0x71, 
  0x70, 0x62, 0x5a, 0x56, 0x6c, 0x49, 0x49, 0x49, 
  0x4a, 0x69, 0x72, 0x71, 0x74, 0x52, 0x64, 0x4e, 
  0x70, 0x42, 0x55, 0x33, 0x46, 0x55, 0x71, 0x68, 
  0x6d, 0x35, 0x33, 0x48, 0x51, 0x7a, 0x5a, 0x70, 
  0x50, 0x6a, 0x66, 0x76, 0x6d, 0x35, 0x31, 0x4a, 
  0x38, 0x6f, 0x65, 0x46, 0x5a, 0x64, 0x35, 0x6e, 
  0x35, 0x76, 0x2f, 0x38, 0x65, 0x57, 0x62, 0x65, 
  0x6d, 0x58, 0x66, 0x6d, 0x47, 0x63, 0x45, 0x54, 
  0x42, 0x67, 0x63, 0x48, 0x74, 0x31, 0x70, 0x72, 
  0x6d, 0x31, 0x53, 0x31, 0x43, 0x57, 0x67, 0x53, 
  0x6b, 0x55, 0x5a, 0x56, 0x33, 0x51, 0x49, 0x6b, 
  0x67, 0x53, 0x30, 0x56, 0x73, 0x35, 0x76, 0x41, 
  0x5a, 0x4f, 0x56, 0x33, 0x44, 0x52, 0x68, 0x56, 
  0x31, 0x56, 0x46, 0x72, 0x37, 0x57, 0x68, 0x33, 
  0x64, 0x33, 0x66, 0x52, 0x68, 0x31, 0x2f, 0x69, 
  0x73, 0x72, 0x46, 0x63, 0x4c, 0x72, 0x65, 0x72, 
  0x72, 0x71, 0x37, 0x75, 0x4b, 0x48, 0x42, 0x4d, 
  0x56, 0x66, 0x66, 0x57, 0x32, 0x50, 0x34, 0x66, 
  0x71, 0x6a, 0x6f, 0x63, 0x6a, 0x38, 0x66, 0x50, 
  0x74, 0x4c, 0x65, 0x33, 0x6a, 0x7a, 0x74, 0x79, 
  0x30, 0x59, 0x33, 0x67, 0x66, 0x44, 0x37, 0x2f, 
  0x70, 0x4c, 0x58, 0x32, 0x68, 0x49, 0x6a, 0x73, 
  0x42, 0x34, 0x79, 0x4c, 0x4e, 0x75, 0x66, 0x41, 
  0x41, 0x6c, 0x65, 0x73, 0x74, 0x65, 0x39, 0x30, 
  0x64, 0x58, 0x56, 0x39, 0x57, 0x32, 0x74, 0x6a, 
  0x4e, 0x51, 0x6b, 0x4f, 0x67, 0x6d, 0x43, 0x66, 
  0x71, 0x72, 0x34, 0x6c, 0x49, 0x67, 0x64, 0x72, 
  0x64, 0x53, 0x51, 0x4d, 0x52, 0x4f, 0x53, 0x71, 
  0x74, 0x66, 0x62, 0x4e, 0x54, 0x43, 0x5a, 0x7a, 
  0x65, 0x64, 0x56, 0x74, 0x72, 0x4b, 0x62, 0x53, 
  0x77, 0x4d, 0x44, 0x41, 0x6a, 0x6e, 0x4b, 0x35, 
  0x6e, 0x42, 0x4f, 0x52, 0x35, 0x31, 0x64, 0x4c, 
  0x58, 0x41, 0x74, 0x55, 0x39, 0x59, 0x74, 0x34, 
  0x50, 0x4a, 0x35, 0x65, 0x54, 0x56, 0x65, 0x50, 
  0x4c, 0x44, 0x67, 0x49, 0x67, 0x6d, 0x50, 0x41, 
  0x61, 0x57, 0x42, 0x62, 0x31, 0x4c, 0x71, 0x4f, 
  0x55, 0x52, 0x53, 0x52, 0x56, 0x31, 0x4f, 0x70, 
  0x31, 0x4a, 0x6b, 0x6f, 0x6c, 0x55, 0x49, 0x4c, 
  0x48, 0x68, 0x6b, 0x5a, 0x53, 0x52, 0x53, 0x4c, 
  0x78, 0x55, 0x48, 0x67, 0x70, 0x63, 0x69, 0x75, 
  0x2b, 0x63, 0x58, 0x37, 0x51, 0x43, 0x61, 0x64, 
  0x54, 0x70, 0x66, 0x43, 0x47, 0x49, 0x63, 0x53, 
  0x50, 0x44, 0x51, 0x30, 0x64, 0x46, 0x2b, 0x70, 
  0x56, 0x44, 0x6f, 0x6e, 0x49, 0x6b, 0x2f, 0x58, 
  0x35, 0x4a, 0x6f, 0x2f, 0x58, 0x41, 0x61, 0x4f, 
  0x70, 0x4e, 0x50, 0x70, 0x6d, 0x79, 0x73, 0x5a, 
  0x72, 0x69, 0x67, 0x34, 0x6c, 0x38, 0x76, 0x74, 
  0x4d, 0x73, 0x5a, 0x63, 0x41, 0x42, 0x35, 0x32, 
  0x34, 0x5a, 0x6c, 0x48, 0x2f, 0x41, 0x49, 0x38, 
  0x6b, 0x30, 0x36, 0x6e, 0x4a, 0x36, 0x6f, 0x5a, 
  0x56, 0x5a, 0x31, 0x43, 0x65, 0x6e, 0x74, 0x37, 
  0x4e, 0x78, 0x74, 0x6a, 0x76, 0x6d, 0x54, 0x6a, 
  0x69, 0x77, 0x56, 0x34, 0x46, 0x4c, 0x68, 0x59, 
  0x4b, 0x42, 0x53, 0x53, 0x31, 0x59, 0x79, 0x57, 
  0x6a, 0x58, 0x42, 0x6c, 0x7a, 0x48, 0x34, 0x46, 
  0x48, 0x4b, 0x72, 0x52, 0x6b, 0x59, 0x38, 0x32, 
  0x62, 0x64, 0x71, 0x55, 0x61, 0x6d, 0x6c, 0x70, 
  0x75, 0x56, 0x58, 0x4e, 0x61, 0x48, 0x68, 0x34, 
  0x2b, 0x4e, 0x37, 0x62, 0x74, 0x32, 0x2f, 0x6e, 
  0x67, 0x52, 0x64, 0x72, 0x35, 0x4c, 0x73, 0x49, 
  0x50, 0x4c, 0x66, 0x63, 0x6d, 0x46, 0x34, 0x32, 
  0x77, 0x73, 0x56, 0x69, 0x73, 0x5a, 0x2f, 0x61, 
  0x78, 0x61, 0x4b, 0x71, 0x56, 0x31, 0x59, 0x53, 
  0x43, 0x39, 0x44, 0x53, 0x30, 0x6e, 0x4a, 0x4c, 
  0x56, 0x61, 0x2f, 0x55, 0x79, 0x67, 0x63, 0x63, 
  0x5a, 0x6e, 0x6f, 0x57, 0x57, 0x52, 0x4a, 0x4c, 
  0x43, 0x75, 0x37, 0x76, 0x37, 0x32, 0x38, 0x47, 
  0x57, 0x68, 0x32, 0x51, 0x49, 0x79, 0x4b, 0x4a, 
  0x43, 0x4c, 0x62, 0x33, 0x75, 0x4f, 0x41, 0x45, 
  0x4f, 0x69, 0x72, 0x54, 0x35, 0x79, 0x49, 0x73, 
  0x45, 0x68, 0x77, 0x45, 0x77, 0x54, 0x59, 0x52, 
  0x36, 0x58, 0x56, 0x45, 0x44, 0x46, 0x41, 0x66, 
  0x77, 0x64, 0x61, 0x56, 0x59, 0x49, 0x44, 0x54, 
  0x41, 0x77, 0x4d, 0x44, 0x4f, 0x78, 0x59, 0x57, 
  0x4c, 0x68, 0x49, 0x73, 0x49, 0x6a, 0x6c, 0x67, 
  0x75, 0x30, 0x50, 0x69, 0x30, 0x43, 0x4b, 0x69, 
  0x39, 0x49, 0x59, 0x51, 0x32, 0x47, 0x61, 0x74, 
  0x37, 0x56, 0x74, 0x59, 0x4f, 0x45, 0x39, 0x77, 
  0x5a, 0x57, 0x31, 0x38, 0x31, 0x43, 0x46, 0x70, 
  0x4a, 0x42, 0x48, 0x57, 0x57, 0x70, 0x63, 0x52, 
  0x42, 0x6a, 0x69, 0x57, 0x7a, 0x2b, 0x65, 0x66, 
  0x6d, 0x46, 0x73, 0x77, 0x54, 0x37, 0x43, 0x49, 
  0x76, 0x4f, 0x32, 0x59, 0x45, 0x46, 0x55, 0x4e, 
  0x33, 0x61, 0x57, 0x4e, 0x4d, 0x56, 0x47, 0x36, 
  0x66, 0x79, 0x68, 0x59, 0x61, 0x39, 0x2b, 0x59, 
  0x78, 0x7a, 0x48, 0x7a, 0x4a, 0x77, 0x69, 0x43, 
  0x41, 0x36, 0x71, 0x36, 0x33, 0x7a, 0x55, 0x68, 
  0x45, 0x63, 0x61, 0x77, 0x68, 0x77, 0x67, 0x6a, 
  0x49, 0x67, 0x66, 0x6e, 0x52, 0x6e, 0x6c, 0x75, 
  0x68, 0x46, 0x39, 0x33, 0x54, 0x56, 0x5a, 0x42, 
  0x61, 0x42, 0x45, 0x2b, 0x49, 0x67, 0x78, 0x67, 
  0x72, 0x54, 0x30, 0x78, 0x79, 0x77, 0x45, 0x51, 
  0x42, 0x4d, 0x47, 0x44, 0x77, 0x41, 0x45, 0x66, 
  0x5a, 0x4b, 0x71, 0x36, 0x6e, 0x6d, 0x4d, 0x59, 
  0x41, 0x42, 0x46, 0x35, 0x61, 0x6d, 0x68, 0x6f, 
  0x71, 0x41, 0x48, 0x75, 0x52, 0x72, 0x67, 0x5a, 
  0x71, 0x50, 0x4e, 0x42, 0x46, 0x69, 0x56, 0x71, 
  0x76, 0x69, 0x49, 0x4d, 0x6d, 0x46, 0x4b, 0x70, 
  0x64, 0x41, 0x51, 0x71, 0x67, 0x6c, 0x57, 0x31, 
  0x32, 0x52, 0x4e, 0x52, 0x70, 0x4a, 0x65, 0x57, 
  0x72, 0x77, 0x67, 0x44, 0x47, 0x47, 0x4f, 0x61, 
  0x41, 0x63, 0x7a, 0x67, 0x34, 0x4f, 0x42, 0x57, 
  0x45, 0x58, 0x6e, 0x4d, 0x46, 0x31, 0x47, 0x55, 
  0x31, 0x5a, 0x50, 0x48, 0x43, 0x4b, 0x4f, 0x71, 
  0x65, 0x77, 0x75, 0x46, 0x51, 0x74, 0x4a, 0x59, 
  0x61, 0x35, 0x74, 0x77, 0x76, 0x48, 0x75, 0x35, 
  0x67, 0x43, 0x6a, 0x30, 0x47, 0x49, 0x37, 0x53, 
  0x47, 0x31, 0x59, 0x42, 0x75, 0x58, 0x50, 0x6e, 
  0x7a, 0x6d, 0x35, 0x6a, 0x72, 0x64, 0x33, 0x6a, 
  0x6b, 0x53, 0x53, 0x53, 0x43, 0x49, 0x64, 0x72, 
  0x36, 0x65, 0x58, 0x61, 0x33, 0x32, 0x4e, 0x45, 
  0x5a, 0x4c, 0x64, 0x6e, 0x6b, 0x74, 0x41, 0x69, 
  0x50, 0x45, 0x63, 0x59, 0x56, 0x64, 0x31, 0x74, 
  0x52, 0x4b, 0x54, 0x52, 0x4a, 0x77, 0x6e, 0x72, 
  0x39, 0x2f, 0x47, 0x77, 0x46, 0x42, 0x71, 0x4e, 
  0x71, 0x6c, 0x62, 0x64, 0x49, 0x58, 0x43, 0x41, 
  0x4b, 0x49, 0x4b, 0x39, 0x52, 0x68, 0x69, 0x34, 
  0x33, 0x7a, 0x42, 0x39, 0x31, 0x75, 0x4d, 0x54, 
  0x47, 0x79, 0x6e, 0x43, 0x53, 0x63, 0x50, 0x64, 
  0x67, 0x79, 0x31, 0x66, 0x32, 0x48, 0x41, 0x52, 
  0x56, 0x73, 0x38, 0x6b, 0x47, 0x30, 0x6d, 0x77, 
  0x4e, 0x55, 0x77, 0x66, 0x56, 0x66, 0x72, 0x45, 
  0x52, 0x75, 0x72, 0x53, 0x6b, 0x34, 0x62, 0x70, 
  0x4d, 0x31, 0x71, 0x66, 0x43, 0x43, 0x56, 0x59, 
  0x56, 0x51, 0x56, 0x77, 0x75, 0x65, 0x4f, 0x78, 
  0x46, 0x43, 0x59, 0x33, 0x54, 0x49, 0x54, 0x37, 
  0x2b, 0x76, 0x6f, 0x53, 0x65, 0x46, 0x7a, 0x78, 
  0x56, 0x56, 0x41, 0x30, 0x54, 0x4a, 0x2b, 0x38, 
  0x2b, 0x34, 0x54, 0x4a, 0x5a, 0x72, 0x4f, 0x78, 
  0x45, 0x48, 0x61, 0x2b, 0x78, 0x79, 0x2b, 0x71, 
  0x65, 0x73, 0x30, 0x41, 0x6f, 0x37, 0x36, 0x4a, 
  0x64, 0x75, 0x37, 0x63, 0x75, 0x65, 0x4c, 0x69, 
  0x4a, 0x70, 0x46, 0x49, 0x50, 0x4f, 0x54, 0x62, 
  0x44, 0x78, 0x45, 0x5a, 0x69, 0x36, 0x6e, 0x71, 
  0x71, 0x49, 0x6a, 0x66, 0x6e, 0x69, 0x51, 0x69, 
  0x50, 0x2b, 0x62, 0x7a, 0x2b, 0x5a, 0x39, 0x56, 
  0x64, 0x57, 0x6f, 0x5a, 0x6b, 0x7a, 0x6a, 0x51, 
  0x35, 0x4e, 0x57, 0x4a, 0x61, 0x59, 0x7a, 0x47, 
  0x59, 0x72, 0x48, 0x59, 0x57, 0x4c, 0x6c, 0x63, 
  0x56, 0x76, 0x79, 0x4f, 0x6e, 0x36, 0x53, 0x6e, 
  0x2f, 0x62, 0x49, 0x6f, 0x30, 0x45, 0x51, 0x69, 
  0x4d, 0x57, 0x59, 0x36, 0x4f, 0x6a, 0x72, 0x2b, 
  0x42, 0x58, 0x35, 0x59, 0x5a, 0x32, 0x66, 0x57, 
  0x41, 0x6c, 0x64, 0x62, 0x57, 0x31, 0x73, 0x6e, 
  0x44, 0x59, 0x43, 0x49, 0x6e, 0x46, 0x31, 0x76, 
  0x62, 0x39, 0x59, 0x41, 0x5a, 0x77, 0x46, 0x69, 
  0x41, 0x4f, 0x56, 0x79, 0x2b, 0x56, 0x4e, 0x6a, 
  0x7a, 0x48, 0x75, 0x34, 0x7a, 0x38, 0x41, 0x42, 
  0x51, 0x45, 0x54, 0x61, 0x78, 0x38, 0x66, 0x48, 
  0x50, 0x38, 0x68, 0x6d, 0x73, 0x33, 0x61, 0x70, 
  0x35, 0x36, 0x6f, 0x71, 0x2b, 0x58, 0x7a, 0x2b, 
  0x42, 0x65, 0x42, 0x44, 0x48, 0x2f, 0x78, 0x41, 
  0x47, 0x54, 0x67, 0x50, 0x46, 0x59, 0x46, 0x64, 
  0x58, 0x56, 0x31, 0x2f, 0x41, 0x64, 0x39, 0x34, 
  0x49, 0x71, 0x4f, 0x61, 0x57, 0x41, 0x41, 0x52, 
  0x30, 0x59, 0x6d, 0x4a, 0x69, 0x55, 0x39, 0x38, 
  0x38, 0x51, 0x4f, 0x58, 0x5a, 0x77, 0x37, 0x4b, 
  0x5a, 0x79, 0x4d, 0x71, 0x49, 0x75, 0x2f, 0x36, 
  0x59, 0x71, 0x73, 0x6d, 0x4e, 0x6f, 0x72, 0x4e, 
  0x61, 0x6d, 0x47, 0x74, 0x50, 0x54, 0x6e, 0x7a, 
  0x66, 0x31, 0x5a, 0x77, 0x4b, 0x70, 0x57, 0x36, 
  0x42, 0x48, 0x7a, 0x6e, 0x69, 0x33, 0x53, 0x39, 
  0x49, 0x43, 0x4a, 0x58, 0x35, 0x79, 0x61, 0x30, 
  0x65, 0x54, 0x39, 0x62, 0x57, 0x6d, 0x2b, 0x49, 
  0x79, 0x4e, 0x4a, 0x6e, 0x53, 0x7a, 0x41, 0x62, 
  0x35, 0x63, 0x2f, 0x58, 0x31, 0x43, 0x4f, 0x50, 
  0x45, 0x4a, 0x48, 0x50, 0x4f, 0x6a, 0x73, 0x37, 
  0x35, 0x32, 0x55, 0x56, 0x4c, 0x48, 0x6f, 0x72, 
  0x78, 0x2b, 0x50, 0x78, 0x44, 0x75, 0x44, 0x36, 
  0x6d, 0x6e, 0x6e, 0x6c, 0x44, 0x2f, 0x2b, 0x55, 
  0x53, 0x71, 0x58, 0x4d, 0x77, 0x73, 0x4a, 0x46, 
  0x67, 0x74, 0x76, 0x61, 0x32, 0x6d, 0x36, 0x6f, 
  0x36, 0x6d, 0x74, 0x72, 0x34, 0x35, 0x4d, 0x2f, 
  0x69, 0x45, 0x68, 0x50, 0x54, 0x30, 0x2f, 0x50, 
  0x33, 0x77, 0x76, 0x4c, 0x6c, 0x35, 0x78, 0x33, 
  0x4d, 0x35, 0x6e, 0x4d, 0x78, 0x79, 0x49, 0x79, 
  0x37, 0x49, 0x6f, 0x38, 0x6d, 0x38, 0x32, 0x75, 
  0x4f, 0x4c, 0x2b, 0x48, 0x73, 0x59, 0x6d, 0x41, 
  0x51, 0x69, 0x71, 0x56, 0x47, 0x6c, 0x6e, 0x71, 
  0x77, 0x62, 0x49, 0x6b, 0x79, 0x57, 0x53, 0x79, 
  0x30, 0x31, 0x46, 0x57, 0x44, 0x51, 0x30, 0x4e, 
  0x44, 0x61, 0x39, 0x55, 0x45, 0x36, 0x53, 0x71, 
  0x30, 0x74, 0x44, 0x51, 0x34, 0x43, 0x72, 0x7a, 
  0x34, 0x42, 0x4b, 0x51, 0x58, 0x75, 0x35, 0x68, 
  0x31, 0x51, 0x2b, 0x47, 0x33, 0x74, 0x37, 0x65, 
  0x7a, 0x66, 0x58, 0x31, 0x39, 0x64, 0x38, 0x44, 
  0x6a, 0x7a, 0x68, 0x79, 0x78, 0x6a, 0x64, 0x2b, 
  0x54, 0x79, 0x51, 0x53, 0x2b, 0x31, 0x70, 0x62, 
  0x57, 0x35, 0x66, 0x64, 0x31, 0x4b, 0x6a, 0x61, 
  0x6a, 0x59, 0x34, 0x66, 0x50, 0x2f, 0x36, 0x66, 
  0x4d, 0x65, 0x5a, 0x5a, 0x34, 0x44, 0x66, 0x6e, 
  0x72, 0x72, 0x6e, 0x48, 0x72, 0x37, 0x46, 0x59, 
  0x37, 0x48, 0x41, 0x31, 0x73, 0x52, 0x42, 0x69, 
  0x37, 0x64, 0x7a, 0x5a, 0x32, 0x66, 0x6c, 0x6e, 
  0x4c, 0x42, 0x62, 0x62, 0x43, 0x31, 0x78, 0x77, 
  0x35, 0x70, 0x70, 0x37, 0x58, 0x41, 0x49, 0x65, 
  0x44, 0x35, 0x4d, 0x2f, 0x48, 0x54, 0x56, 0x39, 
  0x4f, 0x41, 0x2b, 0x38, 0x58, 0x49, 0x74, 0x6e, 
  0x48, 0x6a, 0x41, 0x49, 0x64, 0x44, 0x74, 0x4e, 
  0x48, 0x35, 0x36, 0x4c, 0x44, 0x5a, 0x51, 0x67, 
  0x66, 0x6c, 0x31, 0x45, 0x75, 0x6c, 0x4f, 0x70, 
  0x31, 0x50, 0x6b, 0x6f, 0x6c, 0x56, 0x61, 0x31, 
  0x79, 0x35, 0x48, 0x4c, 0x35, 0x62, 0x61, 0x4c, 
  0x53, 0x50, 0x39, 0x36, 0x58, 0x51, 0x45, 0x41, 
  0x7a, 0x73, 0x58, 0x6a, 0x38, 0x5a, 0x36, 0x32, 
  0x74, 0x72, 0x59, 0x62, 0x55, 0x53, 0x76, 0x57, 
  0x66, 0x4d, 0x6b, 0x44, 0x79, 0x4f, 0x49, 0x67, 
  0x43, 0x54, 0x55, 0x4d, 0x31, 0x75, 0x32, 0x53, 
  0x78, 0x30, 0x49, 0x45, 0x51, 0x58, 0x42, 0x41, 
  0x52, 0x45, 0x36, 0x6f, 0x36, 0x69, 0x48, 0x63, 
  0x62, 0x79, 0x4b, 0x55, 0x67, 0x61, 0x39, 0x56, 
  0x39, 0x57, 0x51, 0x6d, 0x6b, 0x36, 0x6e, 0x35, 
  0x61, 0x38, 0x37, 0x70, 0x78, 0x74, 0x32, 0x70, 
  0x55, 0x36, 0x63, 0x65, 0x69, 0x4d, 0x66, 0x6a, 
  0x52, 0x30, 0x53, 0x6b, 0x78, 0x63, 0x46, 0x46, 
  0x72, 0x5a, 0x39, 0x45, 0x35, 0x49, 0x79, 0x71, 
  0x6a, 0x71, 0x79, 0x55, 0x35, 0x52, 0x34, 0x46, 
  0x33, 0x6e, 0x59, 0x71, 0x43, 0x34, 0x56, 0x43, 
  0x63, 0x6d, 0x70, 0x71, 0x61, 0x76, 0x59, 0x71, 
  0x6e, 0x72, 0x57, 0x32, 0x55, 0x55, 0x53, 0x53, 
  0x54, 0x42, 0x2f, 0x50, 0x7a, 0x68, 0x7a, 0x52, 
  0x7a, 0x6c, 0x7a, 0x44, 0x4b, 0x31, 0x4b, 0x35, 
  0x69, 0x67, 0x65, 0x4d, 0x4a, 0x68, 0x4b, 0x4a, 
  0x73, 0x5a, 0x58, 0x6d, 0x30, 0x39, 0x58, 0x69, 
  0x66, 0x79, 0x49, 0x50, 0x35, 0x65, 0x53, 0x46, 
  0x2b, 0x42, 0x4b, 0x70, 0x41, 0x41, 0x41, 0x41, 
  0x41, 0x45, 0x6c, 0x46, 0x54, 0x6b, 0x53, 0x75, 
  0x51, 0x6d, 0x43, 0x22, 0x3e, 0x0a, 0x20, 0x20, 
  0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x3c, 0x68, 
  0x31, 0x3e, 0x40, 0x40, 0x6d, 0x65, 0x73, 0x73, 
  0x61, 0x67, 0x65, 0x40, 0x40, 0x3c, 0x2f, 0x68, 
  0x31, 0x3e, 0x0a, 0x20, 0x20, 0x20, 0x20, 0x3c, 
  0x2f, 0x64, 0x69, 0x76, 0x3e, 0x0a, 0x3c, 0x2f, 
  0x62, 0x6f, 0x64, 0x79, 0x3e, 0x0a, 0x3c, 0x2f, 
  0x68, 0x74, 0x6d, 0x6c, 0x3e, 0x0a, 0x00, 0x00, 
  0x28, 0x75, 0x75, 0x61, 0x79, 0x29, 0x63, 0x6f, 
  0x63, 0x6b, 0x70, 0x69, 0x74, 0x2d, 0x70, 0x72, 
  0x6f, 0x6a, 0x65, 0x63, 0x74, 0x2f, 0x00, 0x00, 
  0x04, 0x00, 0x00, 0x00, 0x43, 0x6f, 0x63, 0x6b, 
  0x70, 0x69, 0x74, 0x2f, 0x02, 0x00, 0x00, 0x00
} };

static GStaticResource static_resource = { cockpitassets_resource_data.data, sizeof (cockpitassets_resource_data.data), NULL, NULL, NULL };
extern GResource *cockpitassets_get_resource (void);
GResource *cockpitassets_get_resource (void)
{
  return g_static_resource_get_resource (&static_resource);
}
/*
  If G_HAS_CONSTRUCTORS is true then the compiler support *both* constructors and
  destructors, in a sane way, including e.g. on library unload. If not you're on
  your own.

  Some compilers need #pragma to handle this, which does not work with macros,
  so the way you need to use this is (for constructors):

  #ifdef G_DEFINE_CONSTRUCTOR_NEEDS_PRAGMA
  #pragma G_DEFINE_CONSTRUCTOR_PRAGMA_ARGS(my_constructor)
  #endif
  G_DEFINE_CONSTRUCTOR(my_constructor)
  static void my_constructor(void) {
   ...
  }

*/

#ifndef __GTK_DOC_IGNORE__

#if  __GNUC__ > 2 || (__GNUC__ == 2 && __GNUC_MINOR__ >= 7)

#define G_HAS_CONSTRUCTORS 1

#define G_DEFINE_CONSTRUCTOR(_func) static void __attribute__((constructor)) _func (void);
#define G_DEFINE_DESTRUCTOR(_func) static void __attribute__((destructor)) _func (void);

#elif defined (_MSC_VER) && (_MSC_VER >= 1500)
/* Visual studio 2008 and later has _Pragma */

#define G_HAS_CONSTRUCTORS 1

#define G_DEFINE_CONSTRUCTOR(_func) \
  static void _func(void); \
  static int _func ## _wrapper(void) { _func(); return 0; } \
  __pragma(section(".CRT$XCU",read)) \
  __declspec(allocate(".CRT$XCU")) static int (* _array ## _func)(void) = _func ## _wrapper;

#define G_DEFINE_DESTRUCTOR(_func) \
  static void _func(void); \
  static int _func ## _constructor(void) { atexit (_func); return 0; } \
  __pragma(section(".CRT$XCU",read)) \
  __declspec(allocate(".CRT$XCU")) static int (* _array ## _func)(void) = _func ## _constructor;

#elif defined (_MSC_VER)

#define G_HAS_CONSTRUCTORS 1

/* Pre Visual studio 2008 must use #pragma section */
#define G_DEFINE_CONSTRUCTOR_NEEDS_PRAGMA 1
#define G_DEFINE_DESTRUCTOR_NEEDS_PRAGMA 1

#define G_DEFINE_CONSTRUCTOR_PRAGMA_ARGS(_func) \
  section(".CRT$XCU",read)
#define G_DEFINE_CONSTRUCTOR(_func) \
  static void _func(void); \
  static int _func ## _wrapper(void) { _func(); return 0; } \
  __declspec(allocate(".CRT$XCU")) static int (*p)(void) = _func ## _wrapper;

#define G_DEFINE_DESTRUCTOR_PRAGMA_ARGS(_func) \
  section(".CRT$XCU",read)
#define G_DEFINE_DESTRUCTOR(_func) \
  static void _func(void); \
  static int _func ## _constructor(void) { atexit (_func); return 0; } \
  __declspec(allocate(".CRT$XCU")) static int (* _array ## _func)(void) = _func ## _constructor;

#elif defined(__SUNPRO_C)

/* This is not tested, but i believe it should work, based on:
 * http://opensource.apple.com/source/OpenSSL098/OpenSSL098-35/src/fips/fips_premain.c
 */

#define G_HAS_CONSTRUCTORS 1

#define G_DEFINE_CONSTRUCTOR_NEEDS_PRAGMA 1
#define G_DEFINE_DESTRUCTOR_NEEDS_PRAGMA 1

#define G_DEFINE_CONSTRUCTOR_PRAGMA_ARGS(_func) \
  init(_func)
#define G_DEFINE_CONSTRUCTOR(_func) \
  static void _func(void);

#define G_DEFINE_DESTRUCTOR_PRAGMA_ARGS(_func) \
  fini(_func)
#define G_DEFINE_DESTRUCTOR(_func) \
  static void _func(void);

#else

/* constructors not supported for this compiler */

#endif

#endif /* __GTK_DOC_IGNORE__ */

#ifdef G_HAS_CONSTRUCTORS

#ifdef G_DEFINE_CONSTRUCTOR_NEEDS_PRAGMA
#pragma G_DEFINE_CONSTRUCTOR_PRAGMA_ARGS(resource_constructor)
#endif
G_DEFINE_CONSTRUCTOR(resource_constructor)
#ifdef G_DEFINE_DESTRUCTOR_NEEDS_PRAGMA
#pragma G_DEFINE_DESTRUCTOR_PRAGMA_ARGS(resource_destructor)
#endif
G_DEFINE_DESTRUCTOR(resource_destructor)

#else
#warning "Constructor not supported on this compiler, linking in resources will not work"
#endif

static void resource_constructor (void)
{
  g_static_resource_init (&static_resource);
}

static void resource_destructor (void)
{
  g_static_resource_fini (&static_resource);
}
