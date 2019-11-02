# Node simple CLI

Implement a simple CLI program in Node.js which reads a string (from a file or from the CLI arguments) and it will uppercase/lowercase it based on the arguments. Afterwards it will output the resulting string to another file or to the CLI (based again on some arguments).

Hints:
* to read/write to files in Node.js use the built-in [fs package](https://nodejs.org/api/fs.html)

* CLI arguments are found under the global `process.argb` variable. You can either parse it yourself or use a 3rd party package like [minimist](https://www.npmjs.com/package/minimist)


input.txt ⬇
```text 
Hello there!
```

how to run ⬇
```
$ node process-text.js --file input.txt --to UPPER
    ➡ should print "HELLO THERE!" to the CLI

$ node process-text.js --text "Hi" --to LOWER --out out.txt
    ➡ should write "hi!" in the `out.txt` file

$ node process-text.js --to LOWER 
    ➡ should throw an error signaling that either `file` or `text` parameter is mandatory
```