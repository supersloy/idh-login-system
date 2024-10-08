#!/bin/sh
rm .env || true
touch .env

echo "VITE_KEYCLOAK_URL=$KEYCLOAK_URL" >> .env
echo "VITE_KEYCLOAK_REALM=$KEYCLOAK_REALM" >> .env
echo "VITE_KEYCLOAK_CLIENT_ID=$KEYCLOAK_CLIENT_ID" >> .env
echo "VITE_DATASETS_LINK=$DATASETS_LINK" >> .env
echo "VITE_COMPETITION_LINK=$COMPETITION_LINK" >> .env
echo "VITE_GPT_TEACHER_LINK=$GPT_TEACHER_LINK" >> .env
echo "VITE_TREE_TASKS_LINK=$TREE_TASKS_LINK" >> .env
echo "VITE_TASK_GENERATOR_LINK=$TASK_GENERATOR_LINK" >> .env
echo "VITE_TASK_CHECKER_LINK=$TASK_CHECKER_LINK" >> .env