## node v20

1. `nvm use 20.10.0` - Use node v20
2. `yarn` - Install dependencies
3. `yarn global add vercel@33.5.0`
4. `vercel dev -l 3000`
5. `curl http://localhost:3000/api/hello`

- Expected: Successful "hello" response
- Actual:
  - Response: `FUNCTION_INVOCATION_FAILED` ❌
  - vercel dev logs: `Error: Cannot use import statement outside a module` ❌

## node v18

1. `nvm use 18.17.1` - Use node v18
2. `yarn` - Install dependencies
3. `yarn global add vercel@33.5.0`
4. `vercel dev -l 3000`
5. `curl http://localhost:3000/api/hello`

- Expected: Successful "hello" response
- Actual: 200 "hello" ✅
