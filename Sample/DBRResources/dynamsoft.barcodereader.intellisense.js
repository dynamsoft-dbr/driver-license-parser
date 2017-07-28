/*!
* Dynamsoft Barcode Reader JavaScript Intellisense
* Product: Dynamsoft Barcode Reader
* Web Site: http://www.dynamsoft.com
*
* Copyright 2017, Dynamsoft Corporation 
* Author: Dynamsoft Support Team
* Version: 5.1
*/

//**--------------------------------------------------------------------------------------------------------------------------------**//

/// <var type="namespace"></var>
var dynamsoft = dynamsoft || {};

/// <field name="dbrEnv" type="namespace"></field>
dynamsoft.dbrEnv = {
    /// <field type="string">Gets or sets the product key for Dynamsoft Barcode Reader JavaScript SDK. </field>
    productKey: '',
	/// <field type="string">Gets or sets path of resources folder. Module will download from this folder. </field>
    resourcesPath: '',
    
    /// <field type="namespace">An enumeration that describes all the errors defined in Dynamsoft Barcode Reader.</field>
	EnumDBRErrorCode: {
	    /// Successful.
        OK: 0,
	    /// One or more parameters are missing.
        ParameterNumberUnmatched: -1001, 
	    /// The type of parameter [parameter name] is invalid.
        TypeNotValid: -1002,
	    /// The value of parameter [parameter name] is out of range.
        ValueOutOfRange: -1003,
	    /// The value of parameter [parameter name] is invalid.
        ValueNotValid: -1008,
	    /// The server returned the error code [HTTP_status_codes].
        HttpError: -1012, 
	    /// The domain of your current site does not match the domain bound in the current product key, please contact the site administrator.
        LicenseDomainInvalid: -1015,
	    /// The conversion to base64 string failed.
        ConversionFailed: -1028,
	    /// Failed to parse json string.
        JsonParseFailed: -1029, 
	    /// Failed to download the DBR module. Please check the network connection and try again later.
        DownloadDBRModuleFailed: -4001,
	    /// Failed to send the DBR module to Dynamsoft Service. Please check the network connection and try again later.
        SendDBRModuleFailed: -4002,
	    /// Failed to connect to the DBR module. Please check the network connection and try again later.
        ConnectDBRModuleFailed: -4003,
	    /// Unknown error.
        Unknown: -10000,
	    /// Not enough memory.
        NoMemory: -10001, 
	    /// The object isn't set to an instance.
        NullReference: -10002,
	    /// License is expired.
        LicenseExpired: -10004,
	    /// The file type to decode is not supported.
        FileTypeNotSupported: -10006,
	    /// Index is invalid.
        IndexInvalid: -10008,
	    /// Barcode format is invalid
        BarcodeFormatInvalid: -10009,
	    /// Barcode custom region to decode is invalid.
        CustomedRegionInvalid:-10010,
	    /// The maximum barcode number is invalid.
        MaxBarcodeNumberInvalid:-10011,
	    /// Read image fails.
        ImageReadFailed: -10012,
	    /// Read TIFF type image fails.
        TiffReadFailed: -10013,
	    /// You do not have a valid QR Barcode license.
        LicenseQRInvalid: 10016,
	    /// You do not have a valid 1D Barcode license.
        License1DInvalid: -10017,
	    /// You do not have a valid PDF417 barcode license.
        LicensePDF417Invalid:-10019,
	    /// You do not have a valid DATAMATRIX barcode license.
        LicenseDataMatrixInvalid:-10020,
	    /// Invalid DIB Buffer.
        DIBBufferInvalid: -10018,
	    /// The page number is invalid.
        PageNumberInvalid: -10023,
	    /// ([service internal code])[error string returned from service].
	    ServiceInternalError: -20000
	},
    /// <field type="namespace">An enumeration that describes all supported barcode formats.</field>
	EnumBarcodeFormat: {
	    /// All supported formats
	    EBF_All: 0,
	    /// 1d barcode
	    EBF_OneD: 1023,
        /// Code 39
	    EBF_CODE_39: 1,
        /// Code 128
	    EBF_CODE_128: 2,
        /// Code 93
	    EBF_CODE_93: 4,
        /// Codabar
	    EBF_CODABAR: 8,
        /// Interleaved 2 of 5
	    EBF_ITF: 16,
        /// EAN-13
	    EBF_EAN_13: 32,
        /// EAN-8
	    EBF_EAN_8: 64,
        /// UPC-A
	    EBF_UPC_A: 128,
        /// UPC-E
	    EBF_UPC_E: 256,
	    /// Industrial 2 of 5
	    EBF_INDUSTRIAL_25: 512,
        /// PDF417
	    EBF_PDF417: 33554432,
        /// QR Code
	    EBF_QR_CODE: 67108864,
        /// DataMatrix
		EBF_DATAMATRIX: 134217728 
	},
    /// <field type="namespace">An enumeration that represents the type of devices you used to capture barcode images.</field>
	EnumImageCaptureDevice: {
	    /// The image capture device type is unknown, try EICD_Scanner first and if no barcodes were found, try EICD_Fax and then EICD_Camera.
	    EICD_Unknown: 0,
	    /// Barcode images are captured by scanners.
	    EICD_Scanner: 1,
	    /// Barcode images are captured from cameras or video devices.
	    EICD_Camera: 2,
	    /// Barcode images are captured from faxes.
		EICD_Fax: 3 
	},
    /// <field type="namespace">An enumeration that describes all ink colors for barcodes search.</field>
	EnumBarcodeColorMode: {
	    /// Barcodes are printed with dark color (usually in black) on a light (usually in white) background.
	    EBCM_DarkOnLight: 0,
	    /// Barcodes are printed with light color (usually in white) on a dark (usually in black) background.
	    EBCM_LightOnDark: 1,
	    /// Both of the DarkOnLight and LightOnDark
		EBCM_DarkAndLight: 2
	},
    /// <field type="namespace">An enumeration that represents the text encoding types of 2D barcodes.</field>
	EnumBarcodeTextEncoding: { 
		/// By Windows System Code Page(For CN: 936)
		EBTE_Default: 0, 
		/// Japanese
		EBTE_SHIFT_JIS_932: 932, 
		/// Simple Chinese
		EBTE_GB2312_936: 936,  
		/// Korean
		EBTE_Korean_949: 949,  
		/// Traditional Chinese 
		EBTE_BIG5_950: 950, 
		/// UTF16
		EBTE_UTF16: 1200, 
		/// UTF16 big endian
		EBTE_UTF16BE: 1201, 
		/// UTF8
		EBTE_UTF8: 65001 
	},
    /// <field type="namespace">An enumeration that represents the orientation type of the barcodes.</field>
	EnumBarcodeOrientationType: {
	    /// Barcodes with a horizontal orientation will be searched.
	    EBOT_Horizontal: 0,
	    /// Barcodes with a vertical orientation will be searched.
		EBOT_Vertical: 1
	},
    /// <field type="namespace">An enumeration that represents the scan regions for barcode reading.</field>
	EnumScanRegionSide: {
	    /// The barcode reading will be performed on the left side of the image in %.
	    ESRS_Left: 0,
	    /// The barcode reading will be performed on the top side of the image in %.
	    ESRS_Top: 1,
	    /// The barcode reading will be performed on the right side of the image in %.
	    ESRS_Right: 2,
	    /// The barcode reading will be performed on the bottom side of the image in %.
	    ESRS_Bottom: 3
	},
	init: function(onSuccess, onError){
		/// <summary>
		/// Initialize DBR. 
		/// </summary>
		/// <param name="onSuccess" type="function">@template onSuccess()</param>
		/// <param name="onError" type="function">@template onError(int errorCode, string errorString)</param>
		/// <returns type="void"></returns>
	},
	BarcodeReader: function(){
		/// <summary>
	    /// @class BarcodeReader: Defines a class that provides functions for working with extracting barcode data.
		/// </summary>	

	    /// <field name="useOneDDeblur" type="bool">Gets or Sets whether to deblur 1D barcodes before scanning.</field>
	    /// <field name="imageCaptureDevice" type="EnumImageCaptureDevice">Gets or sets the type of devices you used to capture barcode images.</field>
	    /// <field name="barcodeFormats" type="int">Gets or sets the type(s) of barcodes to read.</field>
	    /// <field name="maxBarcodesNumPerPage" type="int">Gets or sets the maximum number of barcodes to read per page.</field>
	    /// <field name="timeoutPerPage" type="int">Gets or sets the expected maximum amount of time Dynamsoft Barcode Reader SDK should spend searching for a barcode per page.</field>
	    /// <field name="barcodeColorMode" type="EnumBarcodeColorMode">Gets or sets the ink color for barcodes search.</field>
	    /// <field name="barcodeTextEncoding" type="EnumBarcodeTextEncoding">Gets or sets barcode text encoding mode.</field>

	    this.useOneDDeblur = true,           
	    this.imageCaptureDevice = 0,
	    this.barcodeFormats = 0,
	    this.maxBarcodesNumPerPage = 0x7ffffff,
	    this.timeoutPerPage = 0x7ffffff,
	    this.barcodeColorMode = 0,
	    this.barcodeTextEncoding = 0		
	},
	ReadResult: function(){
		/// <summary>
	    /// @class ReadResult: A class that returns the barcode result including format, contents, boundary, angle, etc.
		/// </summary>
	}
};

//---------------------------------------------------------------------------------------------

dynamsoft.dbrEnv.BarcodeReader.prototype.addPages = function(arrPages){
	/// <summary>
    /// Adds page indcies to the selection for the barcode search.. 
	/// </summary>
	/// <param name="arrPages" type="Array">Page indices</param>
    /// <returns type="bool"></returns>
};

dynamsoft.dbrEnv.BarcodeReader.prototype.clearAllPages = function(){
	/// <summary>
    /// Clears all pages from the selection.
	/// </summary>
	/// <returns type="void"></returns>
};

dynamsoft.dbrEnv.BarcodeReader.prototype.addRegion = function(left, top, right, bottom, isPercentage){
	/// <summary>
    /// Adds an area of the image to the selection for barcode recognition.
	/// </summary>
    /// <param name="left" type="int">The left-most coordinate of the area.</param>
    /// <param name="top" type="int">The top-most coordinate of the area.</param>
    /// <param name="right" type="int">The right-most coordinate of the area.</param>
    /// <param name="bottom" type="int">The bottom-most coordinate of the area.</param>
    /// <param name="isPercentage" type="bool">Indicates whether the coordinate is measured by percentage or not.</param>
	/// <returns type="bool"></returns>
};

dynamsoft.dbrEnv.BarcodeReader.prototype.addRegion = function(emSide, iPercentage){
	/// <summary>
    /// Adds an area of the image to the selection for barcode recognition.  
	/// </summary>
    /// <param name="emSide" type="EnumScanRegionSide">The type of the area.</param>
    /// <param name="isPercentage" type="int">The percentage measured from region side based on the parameter "emSide". Allowed values range from 1 to 100.</param>
	/// <returns type="bool"></returns>
};

dynamsoft.dbrEnv.BarcodeReader.prototype.clearAllRegions = function(){
	/// <summary>
    /// Clears all regions from the selection. 
	/// </summary>
	/// <returns type="void"></returns>
};

dynamsoft.dbrEnv.BarcodeReader.prototype.addAngleRange = function(fromAngle, toAngle){
	/// <summary>
    /// Adds a range of angles (in degrees) to the selection for the barcode search. 
	/// </summary>
    /// <param name="fromAngle" type="int">The lower bound of angle range.</param>
    /// <param name="toAngle" type="int">The upper bound of angle range.</param>
	/// <returns type="bool"></returns>
};

dynamsoft.dbrEnv.BarcodeReader.prototype.addAngle = function(emOrient){
	/// <summary>
    /// Adds a range of angles (in degrees) to the selection for the barcode search.
	/// </summary>
    /// <param name="emOrient" type="EnumBarcodeOrientationType">The orientation type of barcodes to read.</param>
	/// <returns type="bool"></returns>
};

dynamsoft.dbrEnv.BarcodeReader.prototype.clearAllAngles = function(){
	/// <summary>
    /// Clears all angle ranges from the selection. 
	/// </summary>
	/// <returns type="void"></returns>
};

//------------------------------------------------------------------------------------

dynamsoft.dbrEnv.BarcodeReader.prototype.readURL = function(imageUrl){
	/// <summary>
    /// Reads barcodes from an image URL synchronously. It supports jpg, png, tif, gif and bmp formats.
	/// </summary>
    /// <param name="imageUrl" type="string">The URL of the barcode image.
    /// For example: http://demo1.dynamsoft.com/dbr/code128.png; https://demo1.dynamsoft.com/dbr/code128.png; </param>
	/// <returns type="dynamsoft.dbrEnv.ReadResult"></returns>
};

dynamsoft.dbrEnv.BarcodeReader.prototype.readURLAsync = function(imageUrl, userData, onSuccess, onError){
	/// <summary>
    /// Reads barcodes from an image URL asynchronously. It supports jpg, png, tif, gif and bmp formats.
	/// </summary>
    /// <param name="imageUrl" type="string">The URL of the barcode image.
    /// For example: http://demo1.dynamsoft.com/dbr/code128.png; https://demo1.dynamsoft.com/dbr/code128.png; </param>
    /// <param name="userData" type="anything">Customed user data, such as image index, image url, etc.</param>
	/// <param name="onSuccess" type="function">@template onSuccess(userData, ReadResult errorString)</param>
	/// <param name="onError" type="function">@template onError(userData, int errorCode, string errorString)</param>
	/// <returns type="void"></returns>
};

dynamsoft.dbrEnv.BarcodeReader.prototype.readBinary = function(binary){
	/// <summary>
    /// Reads barcodes from a binary image synchronously.
	/// </summary>
    /// <param name="binary" type="Blob">The binary array of the barcode image.</param>
	/// <returns type="dynamsoft.dbrEnv.ReadResult"></returns>
};

dynamsoft.dbrEnv.BarcodeReader.prototype.readBinaryAsync = function(binary, userData, onSuccess, onError){
	/// <summary>
    /// Reads barcodes from a binary image asynchronously.
	/// </summary>
    /// <param name="binary" type="Blob">The binary array of the barcode image.</param>
    /// <param name="userData" type="object">Customed user data, such as image index, image url, etc.</param>
	/// <param name="onSuccess" type="function">@template onSuccess(userData, ReadResult errorString)</param>
	/// <param name="onError" type="function">@template onError(userData, int errorCode, string errorString)</param>
	/// <returns type="void"></returns>
};

dynamsoft.dbrEnv.BarcodeReader.prototype.readBase64 = function(base64img){
	/// <summary>
    /// Reads barcodes from an image encoded as a base64 string synchronously.
	/// </summary>
    /// <param name="base64img" type="string">The base64 string of the barcode image.</param>
	/// <returns type="dynamsoft.dbrEnv.ReadResult"></returns>
};

dynamsoft.dbrEnv.BarcodeReader.prototype.readBase64Async = function(base64img, userData, onSuccess, onError){
	/// <summary>
    /// Reads barcodes from an image encoded as a base64 string asynchronously.
	/// </summary>
    /// <param name="base64img" type="string">The base64 string of the barcode image.</param>
    /// <param name="userData" type="object">Customed user data, such as image index, image url, etc.</param>
	/// <param name="onSuccess" type="function">@template onSuccess(userData, ReadResult errorString)</param>
	/// <param name="onError" type="function">@template onError(userData, int errorCode, string errorString)</param>
	/// <returns type="void"></returns>
};

//------------------------------------------------------------------------------------------------

dynamsoft.dbrEnv.BarcodeReader.prototype.getErrorCode = function(){
	/// <summary>
    /// Returns the error code.
	/// </summary>
	/// <returns type="int"></returns>
};

dynamsoft.dbrEnv.BarcodeReader.prototype.getErrorString = function(){
	/// <summary>
    /// Returns the error string.
	/// </summary>
	/// <returns type="String"></returns>
};

dynamsoft.dbrEnv.ReadResult.prototype.getCount = function(){
	/// <summary>
    /// Gets the count of all detected barcodes.
	/// </summary>
	/// <returns type="int"></returns>
};

var _onlyforIntellisense = _onlyforIntellisense || {};
_onlyforIntellisense.ReadResultItem = function(){
    /// <summary>
    /// @class ReadResultItem
    /// Only use for intellisense, can't be use in instanceOf. 
    /// </summary>

    /// <field name="format" type="EnumBarcodeFormat">Gets the format/type of a barcode.</field>
    /// <field name="formatString" type="string">Gets the format string of a barcode.</field>
    /// <field name="text" type="string">Gets the content of a barcode in pure text.</field>
    /// <field name="data" type="string">Gets the content of a barcode as Base64 string. This value is used to obtain byte array of barcode.</field>
    /// <field name="angle" type="int">Gets the angle of a barcode.</field>
    /// <field name="moduleSize" type="int">Gets the barcode module size (the minimum bar width in pixel).</field>
    /// <field name="page" type="int">Gets the page number the barcode located in. The index is 0-based.</field>
    /// <field name="left" type="int">Gets the left-most coordinate of the barcode.</field>
    /// <field name="top" type="int">Gets the top-most coordinate of the barcode.</field>
    /// <field name="width" type="int">Gets the width of the barcode.</field>
    /// <field name="height" type="int">Gets the height of the barcode.</field>
    /// <field name="x1" type="int">Gets the X coordinate of the top-left point of the barcode.</field>
    /// <field name="x2" type="int">Gets the X coordinate of the top-right point of the barcode.</field>
    /// <field name="x3" type="int">Gets the X coordinate of the bottom-right point of the barcode.</field>
    /// <field name="x4" type="int">Gets the X coordinate of the bottom-left point of the barcode.</field>
    /// <field name="y1" type="int">Gets the Y coordinate of the top-left point of the barcode.</field>
    /// <field name="y2" type="int">Gets the Y coordinate of the top-right point of the barcode.</field>
    /// <field name="y3" type="int">Gets the Y coordinate of the bottom-right point of the barcode.</field>
    /// <field name="y4" type="int">Gets the Y coordinate of the bottom-left point of the barcode.</field>
    
    this.format = 1,
    this.formatString = "",
    this.text = "",
    this.data = "",
    this.angle = 0,
    this.moduleSize = 4,
    this.page = 0,
    this.left = 0,
	this.top = 0,
	this.width = 100,
	this.height = 100,
	this.x1 = 0,
	this.x2 = 0,
	this.x3 = 0,
	this.x4 = 0,
	this.y1 = 0,
	this.y2 = 0,
	this.y3 = 0,
	this.y4 = 0
};


dynamsoft.dbrEnv.ReadResult.prototype.get = function(index){
	/// <summary>
    /// Returns a barcode at a given index of an array which represents all detected barcodes including format, contents, boundary, angle, etc.
	/// </summary>
    /// <param name="index" type="int">The index of the barcode result array. It is 0-based.</param>
	/// <returns type="onlyforIntellisense.ReadResultItem"></returns>
};



