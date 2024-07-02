from django.core.management.base import BaseCommand
from courses.models import Course
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Seed the database with sample courses'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding data...')

        # Create a test user if not exists
        user, created = User.objects.get_or_create(
            username='testuser',
            email='testuser@example.com'
        )
        if created:
            user.set_password('testpassword')
            user.save()
            self.stdout.write(self.style.SUCCESS(f'Test user created: {user.username}'))

        # Sample course data
        courses_data = [
            {
                'title': 'Introduction to Python',
                'description': 'Learn the basics of Python programming language.',
                'instructor': user
            },
            {
                'title': 'Web Development with Django',
                'description': 'Build web applications using Django framework.',
                'instructor': user
            },
            {
                'title': 'Data Science Fundamentals',
                'description': 'Introduction to data analysis and machine learning.',
                'instructor': user
            },
            {
                'title': 'JavaScript for Beginners',
                'description': 'Learn the fundamentals of JavaScript programming.',
                'instructor': user
            },
            {
                'title': 'Advanced Database Design',
                'description': 'Explore complex database architectures and optimization.',
                'instructor': user
            }
        ]

        for course_data in courses_data:
            course, created = Course.objects.get_or_create(
                title=course_data['title'],
                defaults={
                    'description': course_data['description'],
                    'instructor': course_data['instructor']
                }
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created course: {course.title}'))
            else:
                self.stdout.write(f'Course already exists: {course.title}')

        self.stdout.write(self.style.SUCCESS('Data seeding completed successfully.'))