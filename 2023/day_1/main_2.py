import re

with open('input.txt', 'r') as f:
    content = f.readlines()
    content = [x.strip() for x in content]
    value = 0
    for i in range(len(content)):
        string = content[i]
        translation = {'zero': 'z0o', 'one': 'o1e', 'two': 't2o', 'three': 't3e', 'four': 'f4r', 'five': 'f5e', 'six': 's6x', 'seven': 's7n', 'eight': 'e8t', 'nine': 'n9e'}
        for key, substring in translation.items():
            string = re.sub(key, substring, string)
        number = re.findall(r'\d{1}', string)
        first_number = str(number[0])
        last_number = str(number[-1])
        value += int(first_number + last_number)
    print(value)


