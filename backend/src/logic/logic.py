import typing


async def get_fibonacci(depth: int) -> typing.List[int]:
    """

    :param depth:
    :return:
    """

    if depth > 100 or depth < 0:
        raise Exception('depth could not be outside range [0:100]')

    res = [1, 1]
    if depth in (1, 2):
        return [1, 1]

    for _ in range(depth - 2):
        res.append(res[-1] + res[-2])

    return res
