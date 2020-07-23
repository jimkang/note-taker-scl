note-taker-scl
==================

An instance of @jimkang/note-taker.

Installation
------------

Clone this repo.

Create a config.mk file in the project directory that looks like this:

USER = userontheserver
GROUP = groupoftheuser
PRIVUSER = privilegeduser
SERVER = yourserver

`PRIVUSER` should be a server with rights to copy to `/etc/system/system/` and to run `systemctl`. (See the `Makefile` to see how these are used.)

After that, create config files you have to create in the `configs/` directory to define your weblogs. See [note-taker](jimkang/note-taker) for documentation on the format of the config files.

Deploy:

    make initial-setup

It should run as a systemd service after this. You can stop it remotely with `make stop-service` or restart with `make restart-remote`.

Subsequent deploys:

    make pushall

For an example of a browser client posting to note-taker, see [note-sender](https://github.com/jimkang/note-sender).

License
-------

The MIT License (MIT)

Copyright (c) 2018 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
