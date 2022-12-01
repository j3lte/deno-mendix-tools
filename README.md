# Deno Mendix Toolkit

Yes, we can use the Mendix Platform SDK in Node.js, but we would need to either run it using `ts-node` or compile it to JavaScript first. This is not ideal, as we would need to install additional dependencies and we would need to compile the code every time we make a change.

So, here's a starting point using Deno...

## SDKs used

> I am including the version number in my imports:

- PlatformSDK: `npm:mendixplatformsdk@5.1.1` - [Documentation](https://apidocs.rnd.mendix.com/platformsdk/latest/index.html)
- ModelSDK: `npm:mendixmodelsdk@4.69.0` - [Documentation](https://apidocs.rnd.mendix.com/modelsdk/latest/index.html)

## Instructions

```typescript
import { createClient, getWorkingCopy } from "https://deno.land/x/mendix_toolkit/mod.ts";

const client = createClient({ mxToken: "Your Mendix Personal Access Token" });
const workingCopy = await getWorkingCopy(client, {
  appID: "Mendix APP ID",
});

if (!workingCopy) {
  return;
}

const model = await workingCopy.openModel();
// Do something with the model
```

> We can use the Model & Platform SDK from NPM

```typescript
import {} from "npm:mendixmodelsdk@4.69.0";
import {} from "npm:mendixplatformsdk@5.1.1";
```

## License

MIT License

Copyright (c) 2022 Jelte Lagendijk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
