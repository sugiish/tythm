# Tythm
Discord Music Bot with TypeScript

## Getting Started
### Prerequisites
* Node.js v16.13.1
* npm v8.1.2

### Installation

1. Discord Developer Portal で権限を設定し Bot のトークンを取得する
    1. OAuth2 -> URL Generator -> SCOPES の bot, messages.read, application.commands にチェックを入れる
    2. OAuth2 -> URL Generator -> BOT PERMISSIONS の Read Messages/View Channels, Send Messages, Manage Messages にチェックを入れる
    3. OAuth2 -> URL Generator -> GENERATED URL をブラウザに入力し、サーバに Bot を追加する
    4. Bot -> MESSAGE CONTENT INTENT の設定を有効にする
    5. Bot -> Build-A-Bot -> TOKEN からトークンを確認する
2. レポジトリをクローンする
    ```sh
    git clone git@github.com:sugiish/tythm.git
    ```
3. (Optional) `config.json` に 1. で取得したトークンを設定する
    ```sh
    cp config.json.example config.json
    # Update "discordBotToken" value.
    vim config.json
    ```
4. 実行する
    ```sh
    # Use docker-compose.
    docker-compose up

    # Use local npm.
    npm install
    npm start
    ```

## License
Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
