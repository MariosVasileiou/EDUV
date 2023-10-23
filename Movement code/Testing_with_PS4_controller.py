import time
import RPi.GPIO as GPIO
#import subprocess
from pyPS4Controller.controller import Controller

#Instructions for setting up PS4 controller in raspberry Pi https://github.com/ArturSpirin/pyPS4Controller

# ======================== Controlling Motors with relays ========================

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
# Right Motor
GPIO.setup(24, GPIO.OUT)
GPIO.setup(23, GPIO.OUT)
# Left
GPIO.setup(13, GPIO.OUT)
GPIO.setup(19, GPIO.OUT)
# Front Left
GPIO.setup(16, GPIO.OUT)
GPIO.setup(26, GPIO.OUT)
# Rear Left
GPIO.setup(20, GPIO.OUT)
GPIO.setup(21, GPIO.OUT)
# Front Right --
GPIO.setup(4, GPIO.OUT)
GPIO.setup(17, GPIO.OUT)
# Rear Right
GPIO.setup(27, GPIO.OUT)
GPIO.setup(22, GPIO.OUT)


GPIO.output(23, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(24, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(13, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(19, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(16, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(26, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(4, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(17, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(20, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(21, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(27, GPIO.HIGH)
time.sleep(0.05)
GPIO.output(22, GPIO.HIGH)



#right
def m1(x):
    if x == 0:
        GPIO.output(24, GPIO.HIGH)
        GPIO.output(23, GPIO.HIGH)
    elif x == -1:
        GPIO.output(23, GPIO.LOW)
        GPIO.output(24, GPIO.HIGH)
    elif x == 1:
        GPIO.output(24, GPIO.LOW)
        GPIO.output(23, GPIO.HIGH)


# Left
def m2(x):
    if x == 0:
        GPIO.output(13, GPIO.HIGH)
        time.sleep(0.1)
        GPIO.output(19, GPIO.HIGH)
    elif x == -1:
        GPIO.output(19, GPIO.LOW)
        GPIO.output(13, GPIO.HIGH)
    elif x == 1:
        GPIO.output(13, GPIO.LOW)
        GPIO.output(19, GPIO.HIGH)


# Front Right
def m5(x):
    if x == 0:
        GPIO.output(17, GPIO.HIGH)
        GPIO.output(4, GPIO.HIGH)
    elif x == 1:
        GPIO.output(4, GPIO.LOW)
        GPIO.output(17, GPIO.HIGH)
    elif x == -1:
        GPIO.output(17, GPIO.LOW)
        GPIO.output(4, GPIO.HIGH)


# Rear Left
def m4(x):
    if x == 0:
        GPIO.output(20, GPIO.HIGH)
        GPIO.output(21, GPIO.HIGH)
    elif x == -1:
        GPIO.output(21, GPIO.LOW)
        GPIO.output(20, GPIO.HIGH)
    elif x == 1:
        GPIO.output(20, GPIO.LOW)
        GPIO.output(21, GPIO.HIGH)

# Front Left
def m3(x):
    if x == 0:
        GPIO.output(16, GPIO.HIGH)
        GPIO.output(26, GPIO.HIGH)
    elif x == -1:
        GPIO.output(26, GPIO.LOW)
        GPIO.output(16, GPIO.HIGH)
    elif x == 1:
        GPIO.output(16, GPIO.LOW)
        GPIO.output(26, GPIO.HIGH)


# Rear Right
def m6(x):
    if x == 0:
        GPIO.output(27, GPIO.HIGH)
        GPIO.output(22, GPIO.HIGH)
    elif x == -1:
        GPIO.output(22, GPIO.LOW)
        GPIO.output(27, GPIO.HIGH)
    elif x == 1:
        GPIO.output(27, GPIO.LOW)
        GPIO.output(22, GPIO.HIGH)


def forward():
    m1(1)
    m2(1)
    time.sleep(0.1)


def backwards():
    m1(-1)
    m2(-1)
    time.sleep(0.1)


def left():
    m1(1)
    m2(-1)
    time.sleep(0.1)


def right():
    m1(-1)
    m2(1)
    time.sleep(0.1)


def up():
    m3(1)
    m4(1)
    m5(1)
    m6(1)
    time.sleep(0.1)


def down():
    m3(-1)
    m4(-1)
    m5(-1)
    m6(-1)
    time.sleep(0.1)


def up_front():
    m3(1)
    m4(-1)
    m5(1)
    m6(-1)
    time.sleep(0.1)


def up_rear():
    m3(-1)
    m4(1)
    m5(-1)
    m6(1)
    time.sleep(0.1)


def up_right():
    m3(-1)
    m4(-1)
    m5(1)
    m6(1)
    time.sleep(0.1)


def up_left():
    m3(1)
    m4(1)
    m5(-1)
    m6(-1)
    time.sleep(0.1)


def stopFB():
    m1(0)
    time.sleep(0.02)
    m2(0)
    time.sleep(0.1)


def stopUD():
    m3(0)
    time.sleep(0.02)
    m4(0)
    time.sleep(0.02)
    m5(0)
    time.sleep(0.02)
    m6(0)
    time.sleep(0.1)


def stop_all():
    print("Stopping all motors")
    time.sleep(0.02)
    m1(0)
    time.sleep(0.02)
    m2(0)
    time.sleep(0.02)
    m3(0)
    time.sleep(0.02)
    m4(0)
    time.sleep(0.02)
    m5(0)
    time.sleep(0.02)
    m6(0)
    time.sleep(0.1)


# ======================== At Disconnect ========================



class MyController(Controller):

    def __init__(self, **kwargs):
        Controller.__init__(self, **kwargs)

    def on_x_press(self):
        print("Motors 1= 100%")
        down()


    def on_x_release(self):
        print("Motors 1 Deactivated")
        stopUD()

    def on_triangle_press(self):
        print("Motors 1= -100%")
        up()

    def on_triangle_release(self):
        print("Motors 1 Deactivated")
        stopUD()

# =============== Horizontal Motion =================


    def on_square_press(self):
        left()

    def on_square_release(self):
        stopFB()

    def on_circle_press(self):
        right()

    def on_circle_release(self):
        stopFB()

    def on_R1_press(self):
        forward()

    def on_R1_release(self):
        stopFB()

    def on_L1_press(self):
        backwards()

    def on_L1_release(self):
        stopFB()


    def on_share_press(self):
        print("Taking Photo..")
        #subprocess.call(["/home/pi/save_image/snapshot.sh"])
        print("Ok")

    def on_playstation_button_press(self):
        time.sleep(0.05)
        stop_all()


# =============== Vertical Motion =================


    def on_up_arrow_press(self):
        print("on_up_arrow_press")
        up_rear()


    def on_down_arrow_press(self):
        print("on_down_arrow_press")
        up_front()


    def on_up_down_arrow_release(self):
        print("on_up_down_arrow_release")
        stopUD()

    def on_right_arrow_press(self):
        print("on_left_right_arrow_release")
        up_left()

    def on_left_arrow_press(self):
        print("on_left_right_arrow_release")
        up_right()

    def on_left_right_arrow_release(self):
        print("on_left_right_arrow_release")
        stopUD()

    def on_R3_left(self):
        pass

    def on_R3_x_at_rest(self):
        pass


# ======================== --- ========================

def connect():
    stop_all()
    print("============= PS4 CONNECTED =============")


def disconnect():
    stop_all()
    print("============= PS4 DISCONNECTED =============")


while True:
    controller = MyController(interface="/dev/input/js0", connecting_using_ds4drv=False)
    try:
        #controller = MyController(interface="/dev/input/js0", connecting_using_ds4drv=False)
        controller.listen(on_connect=connect, on_disconnect=disconnect, timeout=60)
    except Exception as err:
        stop_all()
        print("============= ERROR OCCURRED =============")
        print("OS Error: {0}".format(err))
        print("============= RESTARTING... =============")

