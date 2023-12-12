import re

file = open("input.txt").read()

items = file.split("\n\n")
seeds = re.findall(r"(\d+)", items[0])

min_location = float("inf")

for seed in map(int, seeds):
    for item in items[1:]:
        for values in re.findall(r"(\d+) (\d+) (\d+)", item):
            destination, start, length = map(int, values)
            if seed in range(start, start + length):
                seed += destination - start
                break
    min_location = min(min_location, seed)

print(min_location)
