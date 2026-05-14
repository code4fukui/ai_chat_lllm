# ai_chat_lllm

ローカルの大規模言語モデル（LLM）"OpenCALM-chat-api"をさくらの高火力コンピューティング NVIDIA V100にデプロイしたものです。

## 機能
- OpenCALM-7B言語モデルによるチャットAPIの提供
- 応答のキャッシュによる後続クエリの高速化
- デバッグおよび分析用のチャット履歴の記録

## 要件
- Ubuntu 22.04
- CUDA対応NVIDIA GPU
- Python 3および必要な依存パッケージ

## 使用方法

### セットアップ
1. 必要なシステムパッケージのインストール:
   ```sh
   sudo apt-get update
   sudo apt-get install gcc gnupg
   sudo dpkg -i nvidia-driver-local-repo-ubuntu2204-550.90.07_1.0-1_amd64.deb
   sudo cp /var/nvidia-driver-local-repo-ubuntu2204-550.90.07/nvidia-driver-local-895571C4-keyring.gpg /usr/share/keyrings/
   wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-keyring_1.1-1_all.deb
   sudo dpkg -i cuda-keyring_1.1-1_all.deb
   sudo apt-get update
   sudo apt-get install nvidia-driver-550
   ```
2. Pythonパッケージのインストール:
   ```sh
   sudo apt install python3 python3-pip
   sudo apt install uvicorn
   git clone https://github.com/tar-xzvff/OpenCALM-chat-api.git
   cd OpenCALM-chat-api
   pip install -r requirements.txt
   ```
3. OpenCALM-7Bモデルのダウンロード:
   ```sh
   python3 -c 'import torch; from transformers import AutoModelForCausalLM, AutoTokenizer; model = AutoModelForCausalLM.from_pretrained("cyberagent/open-calm-7b", device_map="auto", torch_dtype=torch.float16); model.save_pretrained("/home/ubuntu/model/cyberagent/open-calm-7"); tokenizer = AutoTokenizer.from_pretrained("cyberagent/open-calm-7b"); tokenizer.save_pretrained("/home/ubuntu/model/cyberagent/open-calm-7")'
   ```
4. `main.py`ファイルを編集し、BASIC認証の認証情報を設定します。

### APIサーバーの起動
1. テストサーバーの起動:
   ```sh
   nohup uvicorn main:app --reload --host 0.0.0.0 &
   ```
2. 本番サーバーの起動:
   ```sh
   nohup deno run -A aichat.js 5555 &
   ```
3. ブラウザでAPIを開く: http://localhost:5555/

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
