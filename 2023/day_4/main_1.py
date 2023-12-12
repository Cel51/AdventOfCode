import re

regexNumber = re.compile(r'(\d+)')
total = 0

with open('input.txt') as f:
    lines = f.read().splitlines()

for line in lines:
    game_info = line.split(': ')[0]
    game_data = line.split(': ')[1]

    winning_numbers = game_data.split('|')[0]
    playing_numbers = game_data.split('|')[1]
    # get array of numbers
    winning_numbers = regexNumber.findall(winning_numbers)
    playing_numbers = regexNumber.findall(playing_numbers)

    # for each number in playing_numbers, check if it is in winning_numbers
    result = 0
    for number in playing_numbers:
        if number in winning_numbers:
            result += 1

    # # calculate the point
    if result > 0:
        point = 1
        result -= 1
        for i in range(result):
            point *= 2
        total += point

print(total)