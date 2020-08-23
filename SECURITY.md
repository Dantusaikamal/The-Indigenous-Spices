# Security Policy

## Reporting security problems to The Indigeneous project
DO NOT CREATE AN ISSUE to report a security problem. Instead, please send an email to saffronproject.IT@gmail.com


Security Point of Contact
The security point of contact is Sai. Sai responds to security incident reports as fast as possible, within one business day at the latest.

In case Sai does not respond within a reasonable time, the secondary point of contact is Bharath. Bharath is the only other person with administrative access to the The Indigeneous Project Settings.

## Incident Response Process
In case an incident is discovered or reported, I will follow the following process to contain, respond and remediate:

### 1. Containment
The first step is to find out the root cause, nature and scope of the incident.

Is still ongoing? If yes, first priority is to stop it.
Is the incident outside of my influence? If yes, first priority is to contain it.
Find out knows about the incident and who is affected.
Find out what data was potentially exposed.
One way to immediately remove all access for the The Indigeneous project is to remove the private key from the The Indigeneous project Settings page. The access can be recovered later by generating a new private key and re-deploy the app.

### 2. Response
After the initial assessment and containment to my best abilities, I will document all actions taken in a response plan.

I will create a comment in the official "Updates" issue to inform users about the incident and what I actions I took to contain it.

### 3. Remediation
Once the incident is confirmed to be resolved, I will summarize the lessons learned from the incident and create a list of actions I will take to prevent it from happening again.


## Vulnerability Management Plans
Keep permissions to a minimum
The The Indigeneous project uses the least amount of access to limit the impact of possible security incidents, see Information collection and use.

If someone would get access to the The Indigeneous project, the worst thing they could do is to read out contents from pull requests, limited to repositories The Indigeneous project got installed on.

## Critical Updates And Security Notices
We learn about critical software updates and security threats from these sources

1. GitHub Security Alerts
2. Greenkeeper Dependency Updates
3. GitHub: https://status.github.com/ & @githubstatus
4. Zeit (Hosting): https://zeit-status.co/ & @zeit_status
5. Travis (CI/CD): https://www.traviscistatus.com/ & @traviscistatus
