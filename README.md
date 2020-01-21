# TRF Visual Based IDE
  The project aims to create a Visual Based IDE for Arduino Boards, with a aim that anyone can code. The IDE consists of Just Blocks which   when arranged generate relevant code automatically. The Blocks are divided into various categories so that the user finds it easy to find   required easily without any hassle.
  
 ## Technology Stack
  The Project just uses Javascript currently only. At its core we are usin [Google Blockly](https://developers.google.com/blockly/) for       Block and Code generation. Basically we are extending Google Blockly in this project. But there is a samll catch Google Blockly support     many dyanmically typed languages like PHP, Javascript, Python, Lua and Dart. The Official Google Blockly Library does not support statically typed languages like C. And for Arduino Programming C based syntax is heavily used !!!. So it makes sense to first extend Blockly to support C and then extend it further to complete this project. And extending Blockly is superrr easy and fun. Google has done pretty great job at documenting Blockly, you can find the  [documentation here](https://developers.google.com/blockly/guides/overview).
  
  But currently just to check the viablity of the project i was able to find a Library which already extends Blockly to support C. Documentation of which can be found [here](https://github.com/cra16/cake-core).
  
  
  ## What do I Plan complete in this project.
  
  ### 1) Add support for Adruino Uno, Nano and our own Rudra board  and if possible even RPi !!!
  Most of the current visual based IDEs only support Arduino Uno. We probably might be first IDE to support all these boards , so fingers crossed.
  
 ### 2) Add Support to as many sensors as we can. (they can be led, lcd, ultrasonic senor, smoke detector, Serial communication and many more.)
 By adding support to these sensors means craeting all necessary block required to write code for these sensor. is not a really dificult task as such but jsu we need to study basic code of these sendors and create their blocks.
 
 ### 3) Save the code to Google Drive
 The code currently can be downloaded after finishing the coding part, but it would be great if the code could be saved to users personal drive. This will include concepts like API and authorization and access token. (i am particularly interested in this stuff).
 
 ### 4) Write our Library that extends Google Blockly to support.
 As i have previoulsy said that we are currently extending this [library](https://github.com/cra16/cake-core) for C 
