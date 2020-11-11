# Daily Workflow

## Habitual Routine
- mornings
    - _(main)_ > git pull > npm install (optional) > **DONE**
- nights
    1. _(branch)_ > git branch `[branch-name]` > git checkout `[branch-name]`
    2. git add . > git commit -m "`[message about task]`" > git push origin `[branch-name]`
    3. git checkout main > git branch -D `[branch-name]` > **DONE**

---

## Natural Process
- completed task
    1. _(branch)_ > git branch `[branch-name]` > git checkout `[branch-name]`
    2. git add . > git commit -m "`[message about task]`" > git push origin `[branch-name]`
    3. git checkout main > git branch -D `[branch-name]` > **DONE**
    4. notify other person for code review
- wait for approval
    1. _GitHub Repo_ > click `main ▼` > click "view all branches" link > click "new pull request" button
    2. click green button > click green button, again > click purple button > **DONE**
    3. reply back to person about merge update
- approved
    - _(main)_ > git pull > npm install (optional) > **DONE**