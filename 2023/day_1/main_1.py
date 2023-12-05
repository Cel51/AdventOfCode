import re

with open('input.txt', 'r') as f:
    content = f.readlines()
    content = [x.strip() for x in content]
    value = 0
    for i in range(len(content)):
        numbers = re.findall(r'\d{1}', content[i])
        first_number = int(numbers[0])
        last_number = int(numbers[-1])
        value += int(str(first_number) + str(last_number))
    print(value)

