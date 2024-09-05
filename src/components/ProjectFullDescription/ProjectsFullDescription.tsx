import { Button, Group, Image, Stack, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

import competitionsImage from "@/assets/competitions.png";
import { projects } from "@/projects";

import styles from "./ProjectsFullDescription.module.css";

type ProjectLineProps = {
  children: React.ReactNode;

  name: string;
  icon: JSX.Element;
  route: string;
  image?: JSX.Element;
  rtl?: boolean;
};

function ProjectLine({
  children,
  name,
  icon,
  route,
  image,
  rtl,
}: ProjectLineProps) {
  const { t } = useTranslation();
  const productDescription = (
    <Stack flex={1} align="flex-start">
      {children}
      <Button component="a" href={route} w={260} h={40}>
        Перейти к продукту
      </Button>
    </Stack>
  );

  const imageC = image ?? (
    <Image radius="sm" flex={1} w="40%" src={competitionsImage} />
  );

  const content = rtl ? (
    <>
      {imageC}
      {productDescription}
    </>
  ) : (
    <>
      {productDescription}
      {imageC}
    </>
  );

  return (
    <Stack gap="sm" px={100} id={`${name}-description`}>
      <Group gap="xs">
        <div className={styles.IconContainer}>{icon}</div>
        <Text className={styles.Title}>{t(`projects.${name}.title`)}</Text>
      </Group>
      <Group wrap="nowrap" align="flex-start" gap={50}>
        {content}
      </Group>
    </Stack>
  );
}

const projectDescriptions = {
  datasets: (
    <Text c="#3B4168" size="lg" span>
      InnoDataHub предоставляет возможность быстро находить и создавать
      собственные датасеты. Основные функции: Поиск и фильтрация по тегам для
      быстрого поиска нужных датасетов Загрузка и скачивание позволяет
      обмениваться наборами данных Использование ИИ для автоматического
      добавления описания и тегов при загрузке датасетов Безопасность контента.
      Загружаемые датасет сканируется на наличие нарушений и для предотвращения
      утечки персональных данных
    </Text>
  ),
  graphit: (
    <Text c="#3B4168" size="lg" span>
      Образовательная платформа Graphit предлагает пользователям возможность
      проходить курсы, создавать собственные курсы или загружать материалы с
      помощью ИИ. Основные функции включают: Прохождение курсов с доступом к
      разнообразным темам и материалам Создание курсов самостоятельно или с
      помощью ИИ, который помогает структурировать и оформлять контент
      Отображение прогресса в виде графа, что позволяет пользователям наглядно
      отслеживать свои достижения и оставшиеся задачи
    </Text>
  ),
  GPTeacher: (
    <Text c="#3B4168" size="lg" span>
      Gptитор специализируется на обучении написанию промтов - инструкций для
      искусственного интеллекта. Она предоставляет возможности для тех, кто
      хочет освоить этот навык и применить его в различных сферах, от создания
      контента до разработки ИИ-приложений. Основные функции платформы:
      Упражнения по написанию промтов для практики навыков написания промтов
      Получение обратной связи от ИИ, позволяющей пользователям узнать, как
      улучшить свои промты и сделать их более эффективными
    </Text>
  ),
  competition: (
    <Text c="#3B4168" size="lg" span>
      Соревнования — это платформа для проведения состязаний в области машинного
      обучения и анализа данных. Компании предоставляют наборы данных и ставят
      задачи, которые необходимо решить с помощью методов Data Science.
      Участники соревнуются друг с другом в поиске наилучших решений. Основные
      функции: Публикация соревнований Возможность участия в соревнованиях
      Рейтинговая система для сравнения результатов участников Участие в
      соревнованиях дает возможность практиковаться в решении реальных задач,
      строить модели на больших наборах данных и развивать навыки
      программирования и анализа.
    </Text>
  ),
};

export function ProjectFullDescriptions() {
  return (
    <Stack gap={50}>
      {projects.map((project, index) => (
        <ProjectLine key={project.name} {...project} rtl={index % 2 === 1}>
          {
            projectDescriptions[
              project.name as keyof typeof projectDescriptions
            ]
          }
        </ProjectLine>
      ))}
    </Stack>
  );
}
