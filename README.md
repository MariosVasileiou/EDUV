# Authorship
If you find this material useful, you are asked to cite this article _M. Rousouliotis, M. Vasileiou, N. Manos, and E. Kavallieratou, Employing an underwater vehicle in education as a learning tool for Python programming, Computer Applications in Engineering Education, 32(1), 2024, e22693. https://doi.org/10.1002/cae.22693_.

# License
This material is a part of an open access article under the terms of the Creative Commons Attribution‐NonCommercial License, which permits use, distribution and reproduction in any medium, provided the original work is properly cited and is not used for commercial purposes.
© 2023 The Authors. Computer Applications in Engineering Education published by Wiley Periodicals LLC.
More information about the license can be found: https://creativecommons.org/licenses/by-nc/4.0/

# Correspondence
Marios Vasileiou,
Department of Information and Communication Systems Engineering, University of the Aegean, Samos 8320, Greece. 
Email: mvasileiou@aegean.gr

# EDUV Instructions

This repository contains instructions on how to construct and utilize EDUV underwater vehicle along with its dedicated website. 
The python code, website, and 3D models installation steps have been simplified. 

## EDUV Basic components
A list of the basic components is quoted. 

*You can buy these components from an electonic store. I do not promote any store. Feel free to contact me if you need help finding them.*
- 6 DC Motors (cylinder dimensions in mm 27.5-dia, 32.5-length, >15-shaft length)
- 6 Protective cases (35mm film canisters)
- 6 Propellers 
- 12 Mini Relays
- 1 Battery (12V Pb battery is recommended as the cheapest option)
- 1 DC Step down to 5V 3A
- Submersible camera (Endoscope camera)
- Raspberry Pi 4 Model B 2GB
- PLA filament
- bowl wax
- miscellaneous cables and jumper wires


## EDUV Designs
![Picture2 - Copy](https://user-images.githubusercontent.com/52425561/232246269-ae8fc5b2-37aa-44f2-b422-f71f73560e3e.png)

The vehicle is comprised of 6 parts that need to be 3D-printed:
  - P1: Is the side part of the vehicle [[EDUV-right_part.stl](https://github.com/MariosVasileiou/EDUV/blob/main/3D%20Models/EDUV-right_part.stl)]
  - P2: Is the center cylinder part [[EDUV-center_cylinder.stl](https://github.com/MariosVasileiou/EDUV/blob/main/3D%20Models/EDUV-center_cylinder.stl)]
  - P3: Is the side part of the vehicle mirrored [[EDUV-left_part.stl](https://github.com/MariosVasileiou/EDUV/blob/main/3D%20Models/EDUV-left_part.stl)]
  - M_a: Is the main thruster enclosure [[EDUV-thruster-nose.stl](https://github.com/MariosVasileiou/EDUV/blob/main/3D%20Models/EDUV-thruster-nose.stl)]
  - M_b: Is the nose of the thruster enclosure [[EDUV-thruster_enclosure.stl](https://github.com/MariosVasileiou/EDUV/blob/main/3D%20Models/EDUV-thruster_enclosure.stl)]
  - F: Is the side fin [[EDUV-fin.stl](https://github.com/MariosVasileiou/EDUV/blob/main/3D%20Models/EDUV-fin.stl)]

## EDUV 3D-printing options

The recommended options for the 3D printing of the vehicle are as follows:

|OPTION|VALUE|
|:------|:--------|
|FILAMENT|PLA|
|Temperatures|Given by the manufacturer|
|Layer height|0.3mm (0.2mm for parts M, F)|
|Infill|100%|
|Support|ON (60 deg overhang angle)|
|Outer Layers|>= 5|

## Assembly
### Motor assembly
![image](https://user-images.githubusercontent.com/52425561/235317928-74d58552-bbe8-4de9-96ad-37b2205ebc22.png)

The steps to asseble the motors are as follows:
- Bowl wax must be placed inside Part M_a in order to create pressure between the 3D-printed part and the motor
- The motor is insered inside the part M_a
- A cable must be insered through a small hole at part M_b
- The cable must be soldered on the motored
- Parts M_b is screwed at the part M_a

### 3D printing assembly
![image](https://user-images.githubusercontent.com/52425561/235318469-4da21b79-37d3-4763-8012-aac5c1a00c6b.png)
To fix the motors on the side parts (P1 & P3) 4 screws must be screwed on the holes inside the 2 cylinders.

![image](https://user-images.githubusercontent.com/52425561/235317876-f23c88f2-22c9-4229-ad01-d5564f05a7b6.png)
To asseble the vehicle, 16 screws must be screwed into the 16 holes at the top and bottom of the parts P1 and P3 with the part P2.


## EDUV Software
### RPi Installation
To install the firmware at Raspberry Pi please follow the instactions at the official webpage https://www.raspberrypi.com/documentation/computers/getting-started.html#setting-up-your-raspberry-pi
Leave the predifined username and password, otherwise you have to configure them at the EDUV/Website/phpseclib1.0.9/Net/SSH1.php/

### Vehicle's software
All the libraries needed for the code to be excecuted are preinstalled so you just need to copy the folder Python-code in desktop folder. 
(Further explanation inside the code as comments)

## Website Instructions
To host the website at the PC Xammp is recommended. To install it please follow the instructions at the official webpage https://www.apachefriends.org/download.html 
In order for someone to access the webpage must have your external ip address. Please find instructions: https://lifehacker.com/how-to-find-your-local-and-external-ip-address-5833108
To access it, write at the url *[your_ip] /EDUVPlatform.php*

## Buoyancy configuration
To adjust the buoyancy you just have to put the vehicle at sea surface and depending if it dives or stays at the surface you have to insert inside corks/foam/bottle with air or insert small weights. 
At testing we inserted plastic corks inside the parts P1 and P3
## Connection
In order to connect all the components you have to do the following steps:
- Create a wifi network, so the RPi and the computer can connect. We used mobile hotspot
- Connect both laptop and RPi at this network
- Run XAMMP and enable apache

You are set to go.
Feel free to contact me for questions
