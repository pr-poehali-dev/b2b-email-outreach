import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const contacts = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@startup.com",
    company: "Tech Startup Inc",
    position: "CEO",
    status: "engaged",
    lastContact: "2 дня назад",
    campaigns: 3,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@company.io",
    company: "SaaS Company",
    position: "Marketing Director",
    status: "replied",
    lastContact: "1 неделя назад",
    campaigns: 2,
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@enterprise.com",
    company: "Enterprise Corp",
    position: "CTO",
    status: "opened",
    lastContact: "3 дня назад",
    campaigns: 1,
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.d@startup.xyz",
    company: "Growth Startup",
    position: "Head of Sales",
    status: "new",
    lastContact: "Никогда",
    campaigns: 0,
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@techfirm.com",
    company: "Tech Firm LLC",
    position: "VP Engineering",
    status: "bounced",
    lastContact: "1 месяц назад",
    campaigns: 2,
  },
  {
    id: 6,
    name: "Lisa Anderson",
    email: "l.anderson@innovate.co",
    company: "Innovate Co",
    position: "Product Manager",
    status: "engaged",
    lastContact: "5 дней назад",
    campaigns: 4,
  },
];

const Contacts = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Контакты</h1>
            <p className="text-muted-foreground mt-1">
              База контактов для ваших кампаний
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Icon name="Upload" className="mr-2 h-4 w-4" />
              Импорт
            </Button>
            <Button>
              <Icon name="Plus" className="mr-2 h-4 w-4" />
              Добавить контакт
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Icon name="Search" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск по имени, email, компании..."
              className="pl-9"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Icon name="Filter" className="mr-2 h-4 w-4" />
                Статус
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Все контакты</DropdownMenuItem>
              <DropdownMenuItem>Новые</DropdownMenuItem>
              <DropdownMenuItem>Открыли письмо</DropdownMenuItem>
              <DropdownMenuItem>Ответили</DropdownMenuItem>
              <DropdownMenuItem>Активные</DropdownMenuItem>
              <DropdownMenuItem>Отписались</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">
            <Icon name="Download" className="mr-2 h-4 w-4" />
            Экспорт
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Всего контактов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Активные
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Ответили
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">412</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Отписались
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Все контакты</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  6 из 2,847
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox />
                  </TableHead>
                  <TableHead>Контакт</TableHead>
                  <TableHead>Компания</TableHead>
                  <TableHead>Должность</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Кампании</TableHead>
                  <TableHead>Последний контакт</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{contact.name}</div>
                        <div className="text-sm text-muted-foreground">{contact.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{contact.company}</TableCell>
                    <TableCell>{contact.position}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          contact.status === "engaged"
                            ? "default"
                            : contact.status === "replied"
                            ? "default"
                            : contact.status === "opened"
                            ? "secondary"
                            : contact.status === "bounced"
                            ? "destructive"
                            : "outline"
                        }
                      >
                        {contact.status === "engaged" && "Активен"}
                        {contact.status === "replied" && "Ответил"}
                        {contact.status === "opened" && "Открыл"}
                        {contact.status === "new" && "Новый"}
                        {contact.status === "bounced" && "Недоступен"}
                      </Badge>
                    </TableCell>
                    <TableCell>{contact.campaigns}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {contact.lastContact}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Icon name="MoreVertical" className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Icon name="Eye" className="mr-2 h-4 w-4" />
                            Посмотреть профиль
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Icon name="Edit" className="mr-2 h-4 w-4" />
                            Редактировать
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Icon name="Mail" className="mr-2 h-4 w-4" />
                            Отправить письмо
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Icon name="UserPlus" className="mr-2 h-4 w-4" />
                            Добавить в кампанию
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Icon name="Trash2" className="mr-2 h-4 w-4" />
                            Удалить
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Contacts;
