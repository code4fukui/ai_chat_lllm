# ai_chat_lllm

a local llm "OpenCALM-chat-api" on さくらの高火力コンピューティング NVIDIA V100

## setup

```sh
sudo apt-get update
sudo apt-get install gcc gnupg
sudo apt-key del 7fa2af80
sudo dpkg -i nvidia-driver-local-repo-ubuntu2204-550.90.07_1.0-1_amd64.deb
sudo cp /var/nvidia-driver-local-repo-ubuntu2204-550.90.07/nvidia-driver-local-895571C4-keyring.gpg /usr/share/keyrings/
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-keyring_1.1-1_all.deb
sudo dpkg -i cuda-keyring_1.1-1_all.deb
sudo apt-get update
sudo apt-get install nvidia-driver-550

# local LLM
sudo apt install python3 python3-pip
sudo apt install uvicorn

git clone https://github.com/tar-xzvff/OpenCALM-chat-api.git
cd OpenCALM-chat-api
pip install -r requirements.txt
## 9.3GBダウンロード始まる
python3 -c 'import torch; from transformers import AutoModelForCausalLM, AutoTokenizer; model = AutoModelForCausalLM.from_pretrained("cyberagent/open-calm-7b", device_map="auto", torch_dtype=torch.float16); model.save_pretrained("/home/ubuntu/model/cyberagent/open-calm-7"); tokenizer = AutoTokenizer.from_pretrained("cyberagent/open-calm-7b"); tokenizer.save_pretrained("/home/ubuntu/model/cyberagent/open-calm-7")'
```
edit BASIC id & password [main.py](https://github.com/tar-xzvff/OpenCALM-chat-api/blob/main/main.py)

## start API server　(test)

```sh
nohup uvicorn main:app --reload --host 0.0.0.0 &
```

## API server

edit .env

```sh
nohup deno run -A aichat.js 5555 &
```

open http://localhost:5555/



