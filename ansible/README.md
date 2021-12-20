# Ansible

Our setup uses a number of community-maintained Ansibles roles. Install them using the `ansible-galaxy` command:

```
$ ansible-galaxy install -r ansible/requirements.yml
```


Run:
```
$ ansible-playbook ansible/backup.yml -i ansible/inventories/staging
```
