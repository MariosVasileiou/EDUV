# EDUV Instructions

This repository contains instructions on how to construct and utilize EDUV underwater vehicle along with its dedicated website.

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
To fix the motors on the side parts (P1 & P3) 4 screws must be screwed on the holes inside the 2 cylinders 

![image](https://user-images.githubusercontent.com/52425561/235317876-f23c88f2-22c9-4229-ad01-d5564f05a7b6.png)
To asseble the vehicle, 16 screws must be screwed into the 16 holes at the top and bottom of the parts P1 and P3 with the part P2 


## EDUV Software
installation
Testing code
Testing

## Platform Instructions
Xammp
ip configurations

## Sea testing and Buoyancy

