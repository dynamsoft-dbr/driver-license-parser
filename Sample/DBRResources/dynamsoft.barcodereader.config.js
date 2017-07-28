/**
 * Dynamsoft JavaScript Library
 * @product Dynamsoft Barcode Reader
 * @website http://www.dynamsoft.com
 *
 * @preserve Copyright 2017, Dynamsoft Corporation
 * @author Dynamsoft
 *
 * @version 5.1
 *
 * @fileoverview Dynamsoft JavaScript Library for Dynamsoft Barcode Reader
 * More info on DBR: http://www.dynamsoft.com/Products/Dynamic-Barcode-Reader.aspx
 */

var dynamsoft = dynamsoft || {};
dynamsoft.dbrEnv = dynamsoft.dbrEnv || {};

//////////////////////////////////////////////////////////////////////////////

//  WARNING:  The productKey in this file is protected by copyright law    //

//  and international treaty provisions. Unauthorized reproduction or       //

//  distribution of this  productKey, or any portion of it, may result in severe   //

//  criminal and civil penalties, and will be prosecuted to the maximum     //

//  extent possible under the law.  Further, you may not reverse engineer,  //

//  decompile, disassemble, or modify the productKey .                             //

//////////////////////////////////////////////////////////////////////////////
dynamsoft.dbrEnv.productKey= 't00851wAAAE0i1oSQCkHhEd3OJni5zbHP3JKuBTWT6KKpTjiOxxj8SKSY9U7IA4vwUnzoEPndWGJSC30/p4g10eFUPHwuVFrYJDvhWoLiFUp4owk9eSwrrQ==';

/// set resourcesPath in runtime is ok
(function(){
    var p = document.location.protocol;
    if (p !== 'https:' && p !== 'http:')
		dynamsoft.dbrEnv.resourcesPath = "https://www.dynamsoft.com/demo/JSDemo/DBRResources";
	else
		dynamsoft.dbrEnv.resourcesPath = "DBRResources";
})();
