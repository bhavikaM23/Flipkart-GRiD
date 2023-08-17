def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def solve_test_case(n, a):
    # Sort the array in ascending order
    a.sort()

    # Find the greatest common divisor of all elements
    g = a[0]
    for i in range(1, n):
        g = gcd(g, a[i])

    # If the gcd is greater than 1, then a solution is not possible
    if g > 1:
        return (-1,)

    # If the gcd is 1, then we can create arrays b and c with different elements
    b = [a[0]]
    c = []
    for i in range(1, n):
        if a[i] % a[0] == 0:
            c.append(a[i])
        else:
            b.append(a[i])
    
    # Output the results
    return (len(b), len(c), b, c)

# Read the number of test cases
t = int(input())

# Process each test case
for _ in range(t):
    # Read input for each test case
    n = int(input())
    a = list(map(int, input().split()))

    # Solve the current test case
    result = solve_test_case(n, a)

    # Output the results
    if result[0] == -1:
        print(-1)
    else:
        print(result[0], result[1])
        print(" ".join(map(str, result[2])))
        print(" ".join(map(str, result[3])))
