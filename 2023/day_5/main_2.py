import re

file = open("sample.txt").read()

items = file.split("\n\n")
seeds = re.findall(r"(\d+) (\d+)", items[0])
# convert to array of array of ints
seeds = list(map(lambda x: list(map(int, x)), seeds))

print(seeds)

min_location = float("inf")

for seed_start, seed_length in seeds:
    for seed in range(seed_start, seed_start + seed_length):
        print(seed)
    #     for item in items[1:]:
    #         for values in re.findall(r"(\d+) (\d+) (\d+)", item):
    #             destination, start, length = map(int, values)
    #             if seed in range(start, start + length):
    #                 seed += destination - start
    #                 break
    # min_location = min(min_location, seed)

# print(min_location)
