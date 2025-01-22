# Orders Microservice

## Run dev environment
1. Clone repository
2. Run and install dependencies
    ```bash
    # Install dependecies
    npm install
    ```
3. Create ```.env``` file based on ```.env.template```
4. Run migrations
    ```bash
    # Prisma migrations
    npx prisma migrate dev
    ```

## Run container for development
```bash
docker composer up -d
```