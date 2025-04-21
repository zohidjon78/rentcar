import math

def gola_yuzi(a, b, h):
    r1 = a / 2
    r2 = b / 2
    base_area = math.pi * (r1 ** 2 + r2 ** 2)
    lateral_area = math.pi * (r1 + r2) * math.sqrt((r1 - r2) ** 2 + h ** 2)
    total_area = base_area + lateral_area
    return round(total_area, 2)

print(gola_yuzi(8, 2, 9))    
print(gola_yuzi(17, 11, 3))  
